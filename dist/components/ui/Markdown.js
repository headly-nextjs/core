import { jsx as _jsx } from "react/jsx-runtime";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
const renderNode = {
    [MARKS.BOLD]: (node, children) => (_jsx("span", { className: "font-bold", children: children })),
    [MARKS.ITALIC]: (node, children) => (_jsx("span", { className: "italic", children: children })),
    [MARKS.UNDERLINE]: (node, children) => (_jsx("span", { className: "underline", children: children })),
    [BLOCKS.TABLE]: (node, children) => (_jsx("table", { className: "w-full text-sm text-left text-gray-500 mb-6", children: _jsx("tbody", { className: "bg-white", children: children }) })),
    [BLOCKS.TABLE_ROW]: (node, children) => (_jsx("tr", { children: children })),
    [BLOCKS.TABLE_CELL]: (node, children) => (_jsx("td", { className: "py-6 px-6", children: children })),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (_jsx("th", { className: "pt-3 px-6 text-xs text-gray-700 uppercase bg-gray-50", children: children })),
    [MARKS.CODE]: (node, children) => (_jsx("code", { children: children })),
    [BLOCKS.PARAGRAPH]: (node, children) => (_jsx("p", { className: "mb-6", children: children })),
    [BLOCKS.HEADING_6]: (node, children) => (_jsx("h6", { className: "mb-6 text-xl", children: children })),
    [BLOCKS.HEADING_5]: (node, children) => (_jsx("h5", { className: "mb-6 text-2xl", children: children })),
    [BLOCKS.HEADING_4]: (node, children) => (_jsx("h4", { className: "mb-6 text-3xl", children: children })),
    [BLOCKS.HEADING_3]: (node, children) => (_jsx("h3", { className: "mb-6 text-4xl", children: children })),
    [BLOCKS.HEADING_2]: (node, children) => (_jsx("h2", { className: "mb-6 text-5xl", children: children })),
    [BLOCKS.HEADING_1]: (node, children) => (_jsx("h1", { className: "mb-6 text-6xl", children: children })),
    [BLOCKS.QUOTE]: (node, children) => (_jsx("blockquote", { className: "p-4 mb-6 my-6 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800", children: children })),
    [BLOCKS.HR]: (node, children) => (_jsx("div", { className: "mb-6 w-full border-t", children: children })),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // Cast to unknown then to the expected asset structure.
        const assetNode = node;
        return (_jsx(Image, { alt: assetNode.data.target.fields.title, src: `https:${assetNode.data.target.fields.file.url}`, height: assetNode.data.target.fields.file.details.image.height, width: assetNode.data.target.fields.file.details.image.width }));
    },
    [BLOCKS.UL_LIST]: (node, children) => {
        const childArray = Array.isArray(children) ? children : [children];
        return (_jsx("ul", { className: "space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 mb-6", children: childArray.map((item, index) => (_jsx("li", { children: item }, index))) }));
    },
    [BLOCKS.OL_LIST]: (node, children) => {
        const childArray = Array.isArray(children) ? children : [children];
        return (_jsx("ol", { className: "space-y-1 max-w-md list-decimal list-inside text-gray-500 dark:text-gray-400 mb-6", children: childArray.map((item, index) => (_jsx("li", { children: item }, index))) }));
    },
    [INLINES.HYPERLINK]: (node, children) => {
        const hyperlinkNode = node;
        return (_jsx(Link, { href: hyperlinkNode.data.uri, children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-gray-500", children: children }) }));
    },
};
export const customMarkdownOptions = () => ({
    renderNode,
});
export default function Markdown({ description }) {
    return documentToReactComponents(description, customMarkdownOptions());
}
//# sourceMappingURL=Markdown.js.map