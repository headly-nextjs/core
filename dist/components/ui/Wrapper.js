import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Wrapper({ children, className }) {
    console.log("not custom");
    return (_jsxs("div", { className: `${className || ""} border-debug px-2 md:px-6 bg-red-500 text-red-500`, children: ["wrapper", children] }));
}
//# sourceMappingURL=Wrapper.js.map