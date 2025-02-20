import React from "react";
import Link from "next/link";
import { getUIComponents, UIComponentsMap } from "@headly/core/components/ui";

export interface CallToActionComponentFields {
  title?: string;
  description?: string;
  subDescription?: string;
  link?: string;
  linkText?: string;
}

export type CallToActionComponentEntry = {
  sys: { id: string; contentType: { sys: { id: "callToActionComponent" } } };
  fields: CallToActionComponentFields;
};

export interface CallToActionComponentProps {
  post: CallToActionComponentEntry;
  // Use the UIComponentsMap type for overrides
  uiOverrides?: Partial<UIComponentsMap>;
}

const CallToActionComponent: React.FC<CallToActionComponentProps> = ({
  post,
  uiOverrides,
}) => {
  const { fields } = post;
  if (!fields) return null;

  // Use the centralized helper to merge defaults with any overrides.
  const { Container, Wrapper } = getUIComponents(uiOverrides);

  return (
    <Container>
      <Wrapper>
        <div className="border-debug text-white bg-primary rounded-xl p-20 text-center">
          {fields.title && (
            <p className="border-debug font-medium font-serif text-2xl md:text-4xl">
              {fields.title}
            </p>
          )}
          {fields.description && (
            <p className="border-debug my-6 text-gray-200">
              {fields.description}
            </p>
          )}
          {fields.subDescription && (
            <p className="border-debug text-xl my-1 text-gray-500">
              {fields.subDescription}
            </p>
          )}
          {fields.link && (
            <p className="border-debug">
              <Link
                href={fields.link}
                prefetch={false}
                className="inline-block px-4 py-3 text-black bg-white hover:bg-gray-50 rounded-lg text-center text-md font-medium border-gray-300"
              >
                {fields.linkText}
              </Link>
            </p>
          )}
        </div>
      </Wrapper>
    </Container>
  );
};

export default CallToActionComponent;
