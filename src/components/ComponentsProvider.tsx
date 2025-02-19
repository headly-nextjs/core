"use client"

import React, { createContext, useContext } from "react";
import type { BlocksComponentsMap } from "./blocks";
import { defaultBlocksMap } from "./blocks";
import type { UIComponentsMap } from "./ui";
import { defaultUIMap } from "./ui";

export interface HeadlyComponentsContextType {
  blocks: BlocksComponentsMap;
  ui: UIComponentsMap;
}

const defaultContext: HeadlyComponentsContextType = {
  blocks: defaultBlocksMap,
  ui: defaultUIMap,
};

const ComponentsContext =
  createContext<HeadlyComponentsContextType>(defaultContext);

export const ComponentsProvider: React.FC<{
  blocks?: Partial<BlocksComponentsMap>;
  ui?: Partial<UIComponentsMap>;
  children: React.ReactNode;
}> = ({ blocks, ui, children }) => {
  const mergedBlocks = { ...defaultBlocksMap, ...blocks };
  const mergedUI = { ...defaultUIMap, ...ui };
  return (
    <ComponentsContext.Provider value={{ blocks: mergedBlocks, ui: mergedUI }}>
      {children}
    </ComponentsContext.Provider>
  );
};

export function useComponents(): HeadlyComponentsContextType {
  return useContext(ComponentsContext);
}
