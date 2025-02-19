import React from "react";
import type { PageComponent } from "../classes/crm/types";
import type { BlocksComponentsMap, BlockComponentType } from "./blocks";
import { defaultBlocksMap } from "./blocks";
import type { UIComponentsMap } from "./ui";

export interface Overrides {
  ui?: Partial<UIComponentsMap>;
  blocks?: Partial<BlocksComponentsMap>;
}

interface RenderComponentsProps {
  components?: PageComponent[];
  overrides?: Overrides;
}

// Helper function to render a single component, using the provided blocksMap and ui overrides.
function renderComponent<K extends BlockComponentType>(
  component: PageComponent,
  compType: K,
  blocksMap: BlocksComponentsMap,
  uiOverrides?: Partial<UIComponentsMap>
) {
  const Component = blocksMap[compType] as React.ComponentType<{
    post: Extract<PageComponent, { sys: { contentType: { sys: { id: K } } } }>;
    ui?: Partial<UIComponentsMap>;
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
      ui={uiOverrides}
    />
  );
}

export const RenderComponents: React.FC<RenderComponentsProps> = ({
  components,
  overrides,
}) => {
  if (!components || components.length === 0) return null;

  // Merge the default blocks mapping with any provided overrides.
  const blocksMap: BlocksComponentsMap = {
    ...defaultBlocksMap,
    ...(overrides?.blocks || {}),
  };

  // Extract UI overrides (if any).
  const uiOverrides = overrides?.ui;

  return (
    <>
      {components.map((component) => {
        const compType = component.sys.contentType.sys.id as BlockComponentType;
        if (!blocksMap[compType]) {
          console.log(`Missing component: ${compType}`);
          return null;
        }
        return renderComponent(component, compType, blocksMap, uiOverrides);
      })}
    </>
  );
};

export default RenderComponents;
