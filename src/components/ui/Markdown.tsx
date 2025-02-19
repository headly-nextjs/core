import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document, Block, Inline } from "@contentful/rich-text-types";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type {
  Options,
  NodeRenderer,
} from "@contentful/rich-text-react-renderer";

const renderNode: { [key: string]: NodeRenderer } = {
  [MARKS.BOLD]: (node: Block | Inline, children: React.ReactNode) => (
    <span className="font-bold">{children}</span>
  ),
  [MARKS.ITALIC]: (node: Block | Inline, children: React.ReactNode) => (
    <span className="italic">{children}</span>
  ),
  [MARKS.UNDERLINE]: (node: Block | Inline, children: React.ReactNode) => (
    <span className="underline">{children}</span>
  ),
  [BLOCKS.TABLE]: (node: Block | Inline, children: React.ReactNode) => (
    <table className="w-full text-sm text-left text-gray-500 mb-6">
      <tbody className="bg-white">{children}</tbody>
    </table>
  ),
  [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: React.ReactNode) => (
    <tr>{children}</tr>
  ),
  [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: React.ReactNode) => (
    <td className="py-6 px-6">{children}</td>
  ),
  [BLOCKS.TABLE_HEADER_CELL]: (
    node: Block | Inline,
    children: React.ReactNode
  ) => (
    <th className="pt-3 px-6 text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </th>
  ),
  [MARKS.CODE]: (node: Block | Inline, children: React.ReactNode) => (
    <code>{children}</code>
  ),
  [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
    <p className="mb-6">{children}</p>
  ),
  [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
    <h6 className="mb-6 text-xl">{children}</h6>
  ),
  [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
    <h5 className="mb-6 text-2xl">{children}</h5>
  ),
  [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
    <h4 className="mb-6 text-3xl">{children}</h4>
  ),
  [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
    <h3 className="mb-6 text-4xl">{children}</h3>
  ),
  [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
    <h2 className="mb-6 text-5xl">{children}</h2>
  ),
  [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
    <h1 className="mb-6 text-6xl">{children}</h1>
  ),
  [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
    <blockquote className="p-4 mb-6 my-6 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
      {children}
    </blockquote>
  ),
  [BLOCKS.HR]: (node: Block | Inline, children: React.ReactNode) => (
    <div className="mb-6 w-full border-t">{children}</div>
  ),
  [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
    // Cast to unknown then to the expected asset structure.
    const assetNode = node as unknown as {
      data: {
        target: {
          fields: {
            title: string;
            file: {
              url: string;
              details: { image: { width: number; height: number } };
            };
          };
        };
      };
    };
    return (
      <Image
        alt={assetNode.data.target.fields.title}
        src={`https:${assetNode.data.target.fields.file.url}`}
        height={assetNode.data.target.fields.file.details.image.height}
        width={assetNode.data.target.fields.file.details.image.width}
      />
    );
  },
  [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => {
    const childArray = Array.isArray(children) ? children : [children];
    return (
      <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 mb-6">
        {childArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  },
  [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => {
    const childArray = Array.isArray(children) ? children : [children];
    return (
      <ol className="space-y-1 max-w-md list-decimal list-inside text-gray-500 dark:text-gray-400 mb-6">
        {childArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  },
  [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
    const hyperlinkNode = node as unknown as { data: { uri: string } };
    return (
      <Link href={hyperlinkNode.data.uri}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-500"
        >
          {children}
        </a>
      </Link>
    );
  },
};

export const customMarkdownOptions = (): Options => ({
  renderNode,
});

interface MarkdownProps {
  description: Document;
}

export default function Markdown({ description }: MarkdownProps) {
  return documentToReactComponents(description, customMarkdownOptions());
}
