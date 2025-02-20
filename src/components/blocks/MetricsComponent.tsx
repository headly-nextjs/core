import React from "react";
import { getUIComponents, UIComponentsMap } from "../ui";
import Markdown from "../ui/Markdown";
import type { CRMEntry } from "@/classes/crm/types";
import type { Document } from "@contentful/rich-text-types";

// Define the fields for the Metrics block.
export interface MetricsComponentFields {
  title?: string;
  description?: string;
  subDescription?: Document;
  items: {
    fields: {
      title?: string;
      description?: string;
      subDescription?: string;
    };
  }[];
}

// Define the complete entry type for this block.
export type MetricsComponentEntry = CRMEntry<MetricsComponentFields> & {
  sys: {
    id: string;
    contentType: { sys: { id: "metricsComponent" } };
  };
};

// Define the props for the block.
// We allow UI overrides via the `overrides` prop.
export interface MetricsComponentProps {
  post: MetricsComponentEntry;
  overrides?: Partial<UIComponentsMap>;
}

const MetricsComponent: React.FC<MetricsComponentProps> = ({
  post,
  overrides,
}) => {
  const { fields } = post;
  // Merge default UI components with any provided overrides.
  const { Container, Wrapper, Card } = getUIComponents(overrides);

  return (
    <div className="border-debug from-primary-600 to-primary-700 bg-gradient-to-r text-white">
      <Container>
        <Wrapper>
          <div className="border-debug xl:flex">
            <div className="border-debug w-full xl:w-1/2">
              {fields.title && (
                <p className="font-semibold mb-3 text-center md:text-left">
                  {fields.title}
                </p>
              )}
              {fields.description && (
                <h1 className="text-2xl md:text-4xl font-serif font-semibold text-center md:text-left">
                  {fields.description}
                </h1>
              )}
              {fields.subDescription && (
                <div className="text-gray-300 mt-5 text-lg md:text-xl w-full lg:w-2/3 text-center md:text-left">
                  <Markdown description={fields.subDescription} />
                </div>
              )}
              form?
            </div>
            <div className="w-full xl:w-1/2 xl:flex items-center">
              <div className="md:grid grid-rows-2 grid-flow-col gap-12 space-y-12 md:space-y-0 md:pt-20 xl:pt-0">
                {fields.items.slice(0, 4).map((item, i) => (
                  <Card
                    key={i}
                    title={item.fields.title}
                    description={item.fields.description}
                    subDescription={item.fields.subDescription}
                  />
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MetricsComponent;
