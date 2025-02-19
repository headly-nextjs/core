import { jsx as _jsx } from "react/jsx-runtime";
export default function Container({ children, className = "", }) {
    return (_jsx("div", { className: `border-debug-dashed container mx-auto py-10 md:py-24 lg:px-20 print:py-0 print:px-0 ${className}`, children: children }));
}
//# sourceMappingURL=Container.js.map