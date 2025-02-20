// /headly/components/blocks/CustomerQuoteComponent.tsx
import React from "react";
import Image from "next/image";
import { getUIComponents, UIComponentsMap } from "../ui";
import type { CRMEntry } from "@/classes/crm/types";

// Define the fields for the CustomerQuote block.
export interface CustomerQuoteComponentFields {
  image?: {
    fields: {
      file: {
        url: string;
        details?: {
          image?: {
            width: number;
            height: number;
          };
        };
      };
      title?: string;
    };
  };
  imagePosition?: "top" | "bottom";
  description?: string;
  name?: string;
  title?: string;
  logo?: {
    fields: {
      file: {
        url: string;
        details?: {
          image?: {
            width: number;
            height: number;
          };
        };
      };
      title?: string;
    };
    description?: string;
  };
}

// Define the complete entry type for this block.
export type CustomerQuoteComponentEntry =
  CRMEntry<CustomerQuoteComponentFields> & {
    sys: {
      id: string;
      contentType: { sys: { id: "customerQuoteComponent" } };
    };
  };

// Define the props for the component, including an optional UI override.
export interface CustomerQuoteProps {
  post: CustomerQuoteComponentEntry;
  uiOverrides?: Partial<UIComponentsMap>;
}

const CustomerQuoteComponent: React.FC<CustomerQuoteProps> = ({
  post,
  uiOverrides,
}) => {
  const { fields } = post;
  const bottom = fields.imagePosition === "bottom";
  // Get the effective UI components by merging defaults with any overrides.
  const { Container, Wrapper } = getUIComponents(uiOverrides);

  return (
    <Container>
      <Wrapper>
        <div className="border-debug lg:flex items-center lg:space-x-24">
          {!bottom && (
            <div className="border-debug mb-6 lg:mb-0 h-[380px] md:h-[500px] lg:h-[280px] lg:min-w-[328px] lg:min-h-[348px] relative mx-auto">
              {fields.image && (
                <Image
                  className="object-cover rounded-xl"
                  src={`https:${fields.image.fields.file.url}`}
                  alt={
                    fields.description || fields.image.fields.title || "image"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              )}
            </div>
          )}
          <div className="border-debug lg:ml-6 text-gray-900">
            <p className="border-debug font-medium italic text-xl md:text-3xl font-serif">
              {fields.description}
            </p>
            {bottom && (
              <div className="border-debug h-[64px] w-[64px] relative mx-auto my-6">
                {fields.image && (
                  <Image
                    className="object-cover rounded-xl"
                    src={`https:${fields.image.fields.file.url}`}
                    alt={
                      fields.description || fields.image.fields.title || "image"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                  />
                )}
              </div>
            )}
            <p className="border-debug text-xl my-1">— {fields.name}</p>
            <p className="border-debug text-gray-500">{fields.title}</p>
            {fields.logo?.fields?.file && (
              <p className="border-debug mt-1">
                <Image
                  width={fields.logo.fields.file.details?.image?.width ?? 0}
                  height={fields.logo.fields.file.details?.image?.height ?? 0}
                  src={`https:${fields.logo.fields.file.url}`}
                  alt={
                    fields.logo.description ||
                    fields.logo.fields.title ||
                    "image"
                  }
                />
              </p>
            )}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default CustomerQuoteComponent;
