import { createClient, } from "contentful";
export class ContentfulCRM {
    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        });
        this.previewClient = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
            host: "preview.contentful.com",
        });
        this.previewSecret = process.env.CONTENTFUL_PREVIEW_SECRET;
    }
    // Choose between the preview client and the normal client.
    getClient(isPreview, secret) {
        if (isPreview) {
            if (secret !== this.previewSecret) {
                console.warn("⚠️ Invalid preview secret attempt.");
                return this.client; // fallback to normal client
            }
            return this.previewClient;
        }
        return this.client;
    }
    // Format Contentful entries to our CRMEntry shape.
    formatEntries(entries) {
        return entries.items.map((entry) => ({
            id: entry.sys.id,
            type: entry.sys.contentType.sys.id,
            fields: entry.fields, // cast to F to satisfy TS
            createdAt: entry.sys.createdAt,
            updatedAt: entry.sys.updatedAt,
        }));
    }
    async getByContentType(contentType, include = 3) {
        try {
            const response = await this.client.getEntries({
                content_type: contentType,
                // Contentful's include accepts values 0–10.
                include: include,
            });
            return this.formatEntries(response);
        }
        catch (error) {
            console.error(`❌ Error fetching content type "${contentType}"`, error);
            return [];
        }
    }
    async getBySlug(slug, include = 3, isPreview = false, secret) {
        try {
            // Create a query object.
            // Using Record<string, unknown> to avoid using explicit any.
            const query = {
                content_type: "page",
                include: include,
                "fields.slug[match]": slug.length ? slug.join("/") : "home",
            };
            const response = await this.getClient(isPreview, secret).getEntries(query);
            // console.dir(response, {depth: null})
            const entries = this.formatEntries(response);
            return entries.length > 0 ? entries[0] : null;
        }
        catch (error) {
            console.error(`❌ Error fetching page "${slug}"`, error);
            return null;
        }
    }
    async getPages(include = 1) {
        try {
            const response = await this.client.getEntries({
                content_type: "page",
                include: include,
            });
            return this.formatEntries(response);
        }
        catch (error) {
            console.error("❌ Error fetching pages", error);
            return [];
        }
    }
}
//# sourceMappingURL=ContentfulCRM.js.map