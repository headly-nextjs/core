import React from "react";
import Markdown from "../ui/Markdown";
import type { Document } from "@contentful/rich-text-types";
import { CRMEntry } from "@/classes/crm/types";

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

export interface RichTextComponentProps {
  post: {
    sys: {
      id: string;
      contentType: { sys: { id: "richTextComponent" } };
    };
    fields: {
      title?: string;
      body: Document;
    };
  };
}

const RichTextComponent: React.FC<RichTextComponentProps> = ({ post }) => {
  return <Markdown description={post.fields.body} />;
};

export default RichTextComponent;
