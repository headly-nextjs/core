// /headly/components/blocks/ImageCardListComponent.tsx
import React from "react";
import { getUIComponents, UIComponentsMap } from "../ui";
import type { CRMEntry } from "@/classes/crm/types";
import RenderComponents from "../RenderComponents";
import MarkdownInline from "../ui/MarkdownInline";
import { PageComponent } from ".";

export interface ImageCardListComponentFields {
  title?: string;
  description?: string;
  subDescription?: string;
  backgroundColor?: string;
  highlightTitle?: boolean;
  itemDisplayType?: "column" | "row";
  maxColumns?: number;
  maxRows?: number;
  items?: PageComponent[]; // Replace with proper type for items if available.
}

export type ImageCardListComponentEntry =
  CRMEntry<ImageCardListComponentFields> & {
    sys: { id: string; contentType: { sys: { id: "imageCardListComponent" } } };
  };

export interface ImageCardListComponentProps {
  post: ImageCardListComponentEntry;
  // Accept UI overrides for this block.
  uiOverrides?: Partial<UIComponentsMap>;
}


const ImageCardListComponent: React.FC<ImageCardListComponentProps> = ({
  post,
  uiOverrides,
}) => {
  const { fields } = post;
  const { Container, Wrapper } = getUIComponents(uiOverrides);

  return (
    <div
      className={`border-debug ${
        fields.backgroundColor !== "none" ? fields.backgroundColor : ""
      }`}
    >
      <div className="dark:from-primary-600 dark:to-primary-700 dark:bg-gradient-to-r dark:text-gray-400">
        <Container>
          <Wrapper>
            <div className="border-debug w-full md:w-9/12 lg:w-10/12 mx-auto">
              {fields.title && (
                <div className="border-debug text-center text-primary-700 font-semibold">
                  <div
                    className={`px-4 py-1 inline-block ${
                      fields.highlightTitle ? "bg-primary-50 rounded-3xl" : ""
                    }`}
                  >
                    {fields.title}
                  </div>
                </div>
              )}

              {fields.description && (
                <h1 className="border-debug text-center text-3xl md:text-4xl mt-4 mb-5 font-serif font-semibold text-gray-900 dark:text-white">
                  {fields.description}
                </h1>
              )}

              {fields.subDescription && (
                <div className="border-debug text-center text-gray-500 text-xl dark:text-gray-200">
                  <MarkdownInline post={fields.subDescription} />
                </div>
              )}
            </div>

            <div
              className={`border-debug mt-10 md:mt-20 grid ${
                fields.backgroundColor !== "none" ? fields.backgroundColor : ""
              } ${
                fields.itemDisplayType === "column"
                  ? `lg:grid-flow-col auto-cols-${fields.maxColumns} grid-rows-${fields.maxRows} gap-6`
                  : `grid-flow-row grid-rows-${fields.maxRows} gap-6`
              }`}
            >
              <RenderComponents
                components={fields.items}
                overrides={{ ui: uiOverrides }}
              />
            </div>
          </Wrapper>
        </Container>
      </div>
    </div>
  );
};

export default ImageCardListComponent;
