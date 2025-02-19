import React from "react";
export interface HeaderCenterComponentProps {
    post: {
        sys: {
            id: string;
            contentType: {
                sys: {
                    id: "headerCenterComponent";
                };
            };
        };
        fields: {
            title?: string;
            description?: string;
            subDescription?: string;
            buttonText?: string;
            showEmailRequest?: boolean;
            backgroundColor?: string;
        };
    };
}
declare const HeaderCenterComponent: React.FC<HeaderCenterComponentProps>;
export default HeaderCenterComponent;
//# sourceMappingURL=HeaderCenterComponent.d.ts.map