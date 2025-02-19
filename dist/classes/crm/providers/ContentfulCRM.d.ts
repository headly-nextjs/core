import { FieldsType } from "contentful";
import { CRMEntry } from "../types";
import { CRMProvider } from "../CRMProvder";
export declare class ContentfulCRM implements CRMProvider {
    private client;
    private previewClient;
    private previewSecret;
    constructor();
    private getClient;
    private formatEntries;
    getByContentType<F extends FieldsType>(contentType: string, include?: number): Promise<CRMEntry<F>[]>;
    getBySlug<F extends FieldsType>(slug: string[], include?: number, isPreview?: boolean, secret?: string): Promise<CRMEntry<F> | null>;
    getPages<F extends FieldsType>(include?: number): Promise<CRMEntry<F>[]>;
}
//# sourceMappingURL=ContentfulCRM.d.ts.map