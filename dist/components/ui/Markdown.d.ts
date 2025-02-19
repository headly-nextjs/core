import React from "react";
import type { Document } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
export declare const customMarkdownOptions: () => Options;
interface MarkdownProps {
    description: Document;
}
export default function Markdown({ description }: MarkdownProps): React.ReactNode;
export {};
//# sourceMappingURL=Markdown.d.ts.map