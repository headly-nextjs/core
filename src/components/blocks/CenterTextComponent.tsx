import React from "react";
import type { CRMEntry } from "@/classes/crm/types";

// Define the fields for this block.
export interface CenterTextComponentFields {
  title?: string;
  description?: string;
}

// Define the complete entry type for this block.
export type CenterTextComponentEntry = CRMEntry<CenterTextComponentFields> & {
  sys: { 
    id: string; 
    contentType: { sys: { id: "centerTextComponent" } };
  };
};

// Define the props for the component.
export interface CenterTextComponentProps {
  post: CenterTextComponentEntry;
}

const CenterTextComponent: React.FC<CenterTextComponentProps> = ({ post }) => {
  const { fields } = post;
  return (
    <div className="border-debug text-gray-900 grid grid-rows-2 text-center font-medium">
      <p className="border-debug font-medium text-xl">{fields.title}</p>
      <p className="border-debug text-gray-500 flex-col">{fields.description}</p>
    </div>
  );
};

export default CenterTextComponent;
