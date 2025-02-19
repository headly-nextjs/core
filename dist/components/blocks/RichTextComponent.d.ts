import React from "react";
import type { Document } from "@contentful/rich-text-types";
export interface RichTextComponentProps {
    post: {
        sys: {
            id: string;
            contentType: {
                sys: {
                    id: "richTextComponent";
                };
            };
        };
        fields: {
            title?: string;
            body: Document;
        };
    };
}
declare const RichTextComponent: React.FC<RichTextComponentProps>;
export default RichTextComponent;
//# sourceMappingURL=RichTextComponent.d.ts.map