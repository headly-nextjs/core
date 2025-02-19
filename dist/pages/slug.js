import { jsx as _jsx } from "react/jsx-runtime";
// headly/pages/slug.tsx
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { CRMFactory } from "../classes/crm/CRMFactory";
import { RenderComponents } from "../components/RenderComponents";
import { defaultUIMap } from "../components/ui";
export async function generateStaticParams() {
    const crm = CRMFactory.getCRM();
    const pages = await crm.getPages();
    return pages.map((page) => ({
        slug: page.fields.slug.split("/"),
    }));
}
export async function generateMetadata({ params, }) {
    var _a;
    const { slug } = await params;
    const crm = CRMFactory.getCRM();
    const pageData = await crm.getBySlug(slug, 3, false, "");
    if (!pageData) {
        return {};
    }
    const seo = pageData.fields.seo.fields;
    const ogImages = ((_a = seo.images) === null || _a === void 0 ? void 0 : _a.map((img) => {
        const fileUrl = img.fields.file.url;
        const url = fileUrl.startsWith("//") ? "https:" + fileUrl : fileUrl;
        return Object.assign({ url, alt: img.fields.title || "" }, (img.fields.file.details.image && {
            width: img.fields.file.details.image.width,
            height: img.fields.file.details.image.height,
        }));
    })) || [];
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
export default async function HeadlySlug({ params, searchParams, overrides, }) {
    const crm = CRMFactory.getCRM();
    const sp = await Promise.resolve(searchParams !== null && searchParams !== void 0 ? searchParams : { preview: "false", secret: "" });
    const isPreview = sp.preview === "true";
    if (isPreview)
        noStore();
    const { slug } = await Promise.resolve(params);
    const pageData = await crm.getBySlug(slug, 3, isPreview, sp.secret || "");
    if (!pageData)
        notFound();
    // Merge default UI mapping with any overrides.
    const uiMap = Object.assign(Object.assign({}, defaultUIMap), overrides === null || overrides === void 0 ? void 0 : overrides.ui);
    return (_jsx("main", { children: _jsx(uiMap.Container, { children: _jsx(uiMap.Wrapper, { children: _jsx(RenderComponents, { components: pageData.fields.components, overrides: overrides }) }) }) }));
}
//# sourceMappingURL=slug.js.map