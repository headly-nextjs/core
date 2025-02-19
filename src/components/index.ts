import HeaderCenterComponent from "../components/blocks/HeaderCenterComponent";
import RichTextComponent from "./blocks/RichTextComponent";
import CallToActionComponent from "./blocks/CallToActionComponent";

// A list of IDs from the CRM to map to components.
export type ComponentType =
  | "headerCenterComponent"
  | "richTextComponent"
  | "callToActionComponent";

// The component functions.
export const componentsMap = {
  headerCenterComponent: HeaderCenterComponent,
  richTextComponent: RichTextComponent,
  callToActionComponent: CallToActionComponent,
};
