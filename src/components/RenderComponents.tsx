import React from "react";
import { PageComponent } from "../classes/crm/types";
import { componentsMap, ComponentType } from ".";

// Helper function to render a single component.
// It uses a generic key K to narrow the union type.
function renderComponent<K extends ComponentType>(
  component: PageComponent,
  compType: K
) {
  const Component = componentsMap[compType] as React.ComponentType<{
    post: Extract<PageComponent, { sys: { contentType: { sys: { id: K } } } }>;
  }>;
  return (
    <Component
      key={component.sys.id}
      post={
        component as Extract<
          PageComponent,
          { sys: { contentType: { sys: { id: K } } } }
        >
      }
    />
  );
}

// Export a reusable component that iterates over an array of PageComponent entries
// and renders each one based on its Contentful type.
export const RenderComponents: React.FC<{ components?: PageComponent[] }> = ({
  components,
}) => {
  return (
    <>
      {components?.map((component) => {
        // Narrow the component type to one of our keys
        const compType = component.sys.contentType.sys.id as ComponentType;
        if (!componentsMap[compType]) {
          console.log(`Missing component: ${compType}`)
          return null;
        }
        return renderComponent(component, compType);
      })}
    </>
  );
};
