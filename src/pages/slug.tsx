import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { CRMFactory } from "../classes/crm/CRMFactory";
import { PageFields } from "../classes/crm/types";
import { RenderComponents } from "../components/RenderComponents";
import React from "react";



export async function generateStaticParams() {
  const crm = CRMFactory.getCRM();
  const pages = await crm.getPages<PageFields>();
  return pages.map((page) => ({
    slug: page.fields.slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const crm = CRMFactory.getCRM();
  const pageData = await crm.getBySlug<PageFields>(slug, 3, false, "");
  if (!pageData) {
    return {};
  }
  const seo = pageData.fields.seo.fields;
  const ogImages =
    seo.images?.map((img) => {
      const fileUrl = img.fields.file.url;
      const url = fileUrl.startsWith("//") ? "https:" + fileUrl : fileUrl;
      return {
        url,
        alt: img.fields.title || "",
        ...(img.fields.file.details.image && {
          width: img.fields.file.details.image.width,
          height: img.fields.file.details.image.height,
        }),
      };
    }) || [];
  return {
    title: seo.pageTitle,
    description: seo.pageDescription,
    openGraph: {
      title: seo.pageTitle,
      description: seo.pageDescription,
      url: `${process.env.SITE_URL}/${slug.join("/")}`,
      images: ogImages,
    },
    robots: {
      index: !seo.disableIndexing,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.pageTitle,
      description: seo.pageDescription,
      images: ogImages,
    },
  };
}

export interface HeadlySlugProps {
  
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ preview?: string; secret?: string }>;
  
}

export default async function HeadlySlug({
  params,
  searchParams,
}: HeadlySlugProps) {
  const crm = CRMFactory.getCRM();
  const { preview, secret } = await Promise.resolve(searchParams);
  const isPreview = preview === "true";
  if (isPreview) {
    noStore();
  }
  const { slug } = await Promise.resolve(params);
  const pageData = await crm.getBySlug<PageFields>(
    slug,
    3,
    isPreview,
    secret || ""
  );
  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <RenderComponents components={pageData.fields.components} />
    </main>
  );
}
