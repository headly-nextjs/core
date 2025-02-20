import { PageComponent } from "@/components/blocks";

// Base CRM entry type
export interface CRMEntry<F = unknown> {
  id: string;
  type: string;
  fields: F;
  createdAt: string;
  updatedAt: string;
}

// SEO and Page fields
export interface SEOFields {
  pageTitle: string;
  pageDescription: string;
  images?: {
    fields: {
      title: string;
      file: {
        url: string;
        details: {
          size: number;
          image?: {
            width: number;
            height: number;
          };
        };
        fileName: string;
        contentType: string;
      };
    };
  }[];
  changeFrequency: string;
  priority: string;
  disableIndexing: boolean;
  head: string;
}

export interface PageFields {
  title: string;
  content?: string;
  slug: string;
  seo: {
    fields: SEOFields;
  };
  components?: PageComponent[];
}
