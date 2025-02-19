"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { defaultBlocksMap } from "./blocks";
import { defaultUIMap } from "./ui";
const defaultContext = {
    blocks: defaultBlocksMap,
    ui: defaultUIMap,
};
const ComponentsContext = createContext(defaultContext);
export const ComponentsProvider = ({ blocks, ui, children }) => {
    const mergedBlocks = Object.assign(Object.assign({}, defaultBlocksMap), blocks);
    const mergedUI = Object.assign(Object.assign({}, defaultUIMap), ui);
    return (_jsx(ComponentsContext.Provider, { value: { blocks: mergedBlocks, ui: mergedUI }, children: children }));
};
export function useComponents() {
    return useContext(ComponentsContext);
}
//# sourceMappingURL=ComponentsProvider.js.map