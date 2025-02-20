import React from "react";
import Image from "next/image";
import type { CRMEntry } from "@/classes/crm/types";
import MarkdownInline from "../ui/MarkdownInline";

// Define the fields for this component.
export interface ImageCardComponentFields {
  title?: string;
  description?: string;
  subDescription?: string;
  image?: {
    fields?: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
}

// Define the complete entry type using your base CRMEntry.
export type ImageCardComponentEntry = CRMEntry<ImageCardComponentFields> & {
  sys: {
    id: string;
    contentType: { sys: { id: "imageCardComponent" } };
  };
};

// Define the props for the component.
export interface ImageCardComponentProps {
  post: ImageCardComponentEntry;
}

const ImageCardComponent: React.FC<ImageCardComponentProps> = ({ post }) => {
  const { fields } = post;
  return (
    <div className="border-debug">
      <div className="border-debug mb-6 h-[380px] md:h-[296px] relative mx-auto">
        <Image
          className="object-cover rounded-xl"
          src={`https:${fields?.image?.fields?.file.url}`}
          alt={
            fields?.description ||
            fields?.image?.fields?.title ||
            "image"
          }
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="border-debug">
        <p className="border-debug text-gray-900 text-xl">
          {fields.title}
        </p>
        <div className="border-debug font-medium text-lg mt-1 mb-4 text-primary-700">
          <MarkdownInline post={fields.description || ""} />
        </div>
        <div className="border-debug text-gray-500">
          <MarkdownInline post={fields.subDescription || ""} />
        </div>
      </div>
    </div>
  );
};

export default ImageCardComponent;
