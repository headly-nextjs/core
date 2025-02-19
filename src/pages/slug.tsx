// headly/pages/slug.tsx
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import React, { JSX } from "react";
import { CRMFactory } from "../classes/crm/CRMFactory";
import type { PageFields } from "../classes/crm/types";
import { RenderComponents } from "../components/RenderComponents";
import type { UIComponentsMap } from "../components/ui";
import { defaultUIMap } from "../components/ui";
import { BlocksComponentsMap } from "@/components/blocks";

export interface HeadlySlugProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ preview?: string; secret?: string }>;
  overrides?: {
    ui?: Partial<UIComponentsMap>;
    // You can also support blocks overrides if needed.
    blocks?: Partial<BlocksComponentsMap>; // Replace with your BlocksComponentsMap type if desired.
  };
}

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

export default async function HeadlySlug({
  params,
  searchParams,
  overrides,
}: HeadlySlugProps): Promise<JSX.Element> {
  const crm = CRMFactory.getCRM();
  const sp = await Promise.resolve(
    searchParams ?? { preview: "false", secret: "" }
  );
  const isPreview = sp.preview === "true";
  if (isPreview) noStore();
  const { slug } = await Promise.resolve(params);
  const pageData = await crm.getBySlug<PageFields>(
    slug,
    3,
    isPreview,
    sp.secret || ""
  );
  if (!pageData) notFound();

  // Merge default UI mapping with any overrides.
  const uiMap: UIComponentsMap = { ...defaultUIMap, ...overrides?.ui };

  return (
    <main>
      <uiMap.Container>
        <uiMap.Wrapper>
          <RenderComponents
            components={pageData.fields.components}
            overrides={overrides}
          />
        </uiMap.Wrapper>
      </uiMap.Container>
    </main>
  );
}
