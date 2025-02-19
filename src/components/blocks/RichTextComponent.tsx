import React from "react";
import Markdown from "../ui/Markdown";
import type { Document } from "@contentful/rich-text-types";

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
