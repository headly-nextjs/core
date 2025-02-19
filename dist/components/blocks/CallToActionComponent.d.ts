import React from "react";
import { ContainerProps } from "../ui/Container";
import { WrapperProps } from "../ui/Wrapper";
export interface CallToActionComponentProps {
    post: {
        sys: {
            id: string;
            contentType: {
                sys: {
                    id: "callToActionComponent";
                };
            };
        };
        fields: {
            title?: string;
            description?: string;
            subDescription?: string;
            link?: string;
            linkText?: string;
        };
    };
    ui?: {
        Container?: React.ComponentType<ContainerProps>;
        Wrapper?: React.ComponentType<WrapperProps>;
    };
}
declare const CallToActionComponent: React.FC<CallToActionComponentProps>;
export default CallToActionComponent;
//# sourceMappingURL=CallToActionComponent.d.ts.map