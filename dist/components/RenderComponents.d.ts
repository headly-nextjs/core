import React from "react";
import type { PageComponent } from "../classes/crm/types";
import type { BlocksComponentsMap } from "./blocks";
import type { UIComponentsMap } from "./ui";
export interface Overrides {
    ui?: Partial<UIComponentsMap>;
    blocks?: Partial<BlocksComponentsMap>;
}
interface RenderComponentsProps {
    components?: PageComponent[];
    overrides?: Overrides;
}
export declare const RenderComponents: React.FC<RenderComponentsProps>;
export default RenderComponents;
//# sourceMappingURL=RenderComponents.d.ts.map