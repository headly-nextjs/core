import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownInlineProps {
  post: string;
}

const MarkdownInline: React.FC<MarkdownInlineProps> = ({ post }) => {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  const result = post.replace(emailRegex, "[$1](mailto:$1)");

  return <ReactMarkdown>{result}</ReactMarkdown>;
};

export default MarkdownInline;
