import HeaderCenterComponent, { HeaderCenterComponentProps } from "./HeaderCenterComponent";
import RichTextComponent, { RichTextComponentProps } from "./RichTextComponent";
import CallToActionComponent, { CallToActionComponentProps } from "./CallToActionComponent";

export type BlockComponentType =
  | "headerCenterComponent"
  | "richTextComponent"
  | "callToActionComponent";

export interface BlocksComponentsMap {
  headerCenterComponent: React.ComponentType<HeaderCenterComponentProps>;
  richTextComponent: React.ComponentType<RichTextComponentProps>;
  callToActionComponent: React.ComponentType<CallToActionComponentProps>;
}

export const defaultBlocksMap: BlocksComponentsMap = {
  headerCenterComponent: HeaderCenterComponent,
  richTextComponent: RichTextComponent,
  callToActionComponent: CallToActionComponent,
};
