// Base CRM entry type
export interface CRMEntry<F = unknown> {
  id: string;
  type: string;
  fields: F;
  createdAt: string;
  updatedAt: string;
}

// HeaderCenter types
export interface HeaderCenterComponentFields {
  title?: string;
  description?: string;
  subDescription?: string;
  buttonText?: string;
  showEmailRequest?: boolean;
  backgroundColor?: string;
}

export type HeaderCenterComponentEntry = CRMEntry<HeaderCenterComponentFields> & {
  sys: { id: string; contentType: { sys: { id: "headerCenterComponent" } } };
};

// RichText types
export interface RichTextComponentFields {
  title?: string;
  body: {
    nodeType: string;
    data: Record<string, unknown>;
    content: RichTextNode[];
  };
}

export interface RichTextNode {
  nodeType: string;
  value?: string;
  data: Record<string, unknown>;
  content?: RichTextNode[];
}

export type RichTextComponentEntry = CRMEntry<RichTextComponentFields> & {
  sys: { id: string; contentType: { sys: { id: "richTextComponent" } } };
};

// CallToAction types
export interface CallToActionComponentFields {
  title?: string;
  description?: string;
  subDescription?: string;
  link?: string;
  linkText?: string;
}

export type CallToActionComponentEntry = CRMEntry<CallToActionComponentFields> & {
  sys: { id: string; contentType: { sys: { id: "callToActionComponent" } } };
};

// Union type for page components.
export type PageComponent =
  | HeaderCenterComponentEntry
  | RichTextComponentEntry
  | CallToActionComponentEntry;

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
