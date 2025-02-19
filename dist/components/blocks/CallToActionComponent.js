import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import DefaultContainer from "../ui/Container";
import DefaultWrapper from "../ui/Wrapper";
const CallToActionComponent = ({ post, ui, }) => {
    var _a, _b;
    const { fields } = post;
    if (!fields)
        return null;
    // Use the override if provided; otherwise fall back to the default UI components.
    const Container = (_a = ui === null || ui === void 0 ? void 0 : ui.Container) !== null && _a !== void 0 ? _a : DefaultContainer;
    const Wrapper = (_b = ui === null || ui === void 0 ? void 0 : ui.Wrapper) !== null && _b !== void 0 ? _b : DefaultWrapper;
    return (_jsx(Container, { children: _jsx(Wrapper, { children: _jsxs("div", { className: "border-debug text-white bg-primary rounded-xl p-20 text-center", children: [fields.title && (_jsx("p", { className: "border-debug font-medium font-serif text-2xl md:text-4xl", children: fields.title })), fields.description && (_jsx("p", { className: "border-debug my-6 text-gray-200", children: fields.description })), fields.subDescription && (_jsx("p", { className: "border-debug text-xl my-1 text-gray-500", children: fields.subDescription })), fields.link && (_jsx("p", { className: "border-debug", children: _jsx(Link, { href: fields.link, prefetch: false, className: "inline-block px-4 py-3 text-black bg-white hover:bg-gray-50 rounded-lg text-center text-md font-medium border-gray-300", children: fields.linkText }) }))] }) }) }));
};
export default CallToActionComponent;
//# sourceMappingURL=CallToActionComponent.js.map