import React from "react";
import type { BlocksComponentsMap } from "./blocks";
import type { UIComponentsMap } from "./ui";
export interface HeadlyComponentsContextType {
    blocks: BlocksComponentsMap;
    ui: UIComponentsMap;
}
export declare const ComponentsProvider: React.FC<{
    blocks?: Partial<BlocksComponentsMap>;
    ui?: Partial<UIComponentsMap>;
    children: React.ReactNode;
}>;
export declare function useComponents(): HeadlyComponentsContextType;
//# sourceMappingURL=ComponentsProvider.d.ts.map