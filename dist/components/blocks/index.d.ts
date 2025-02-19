import { HeaderCenterComponentProps } from "./HeaderCenterComponent";
import { RichTextComponentProps } from "./RichTextComponent";
import { CallToActionComponentProps } from "./CallToActionComponent";
export type BlockComponentType = "headerCenterComponent" | "richTextComponent" | "callToActionComponent";
export interface BlocksComponentsMap {
    headerCenterComponent: React.ComponentType<HeaderCenterComponentProps>;
    richTextComponent: React.ComponentType<RichTextComponentProps>;
    callToActionComponent: React.ComponentType<CallToActionComponentProps>;
}
export declare const defaultBlocksMap: BlocksComponentsMap;
//# sourceMappingURL=index.d.ts.map