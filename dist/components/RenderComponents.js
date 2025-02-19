import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { defaultBlocksMap } from "./blocks";
// Helper function to render a single component, using the provided blocksMap and ui overrides.
function renderComponent(component, compType, blocksMap, uiOverrides) {
    const Component = blocksMap[compType];
    return (_jsx(Component, { post: component, ui: uiOverrides }, component.sys.id));
}
export const RenderComponents = ({ components, overrides, }) => {
    if (!components || components.length === 0)
        return null;
    // Merge the default blocks mapping with any provided overrides.
    const blocksMap = Object.assign(Object.assign({}, defaultBlocksMap), ((overrides === null || overrides === void 0 ? void 0 : overrides.blocks) || {}));
    // Extract UI overrides (if any).
    const uiOverrides = overrides === null || overrides === void 0 ? void 0 : overrides.ui;
    return (_jsx(_Fragment, { children: components.map((component) => {
            const compType = component.sys.contentType.sys.id;
            if (!blocksMap[compType]) {
                console.log(`Missing component: ${compType}`);
                return null;
            }
            return renderComponent(component, compType, blocksMap, uiOverrides);
        }) }));
};
export default RenderComponents;
//# sourceMappingURL=RenderComponents.js.map