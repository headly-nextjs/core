import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HeaderCenterComponent = ({ post }) => {
    const { fields } = post;
    return (_jsx("div", { className: `border-debug ${fields.backgroundColor || ""}`, children: _jsx("div", { className: "dark:from-primary-600 dark:to-primary-700 dark:bg-gradient-to-r dark:text-gray-400", children: _jsxs("div", { className: "border-debug w-full md:w-11/12 xl:w-9/12 mx-auto", children: [fields.title && (_jsx("p", { className: "border-debug text-center text-primary-600 font-bold dark:text-white", children: fields.title })), fields.description && (_jsx("h1", { className: "border-debug text-center text-4xl md:text-6xl mt-6 mb-12 font-serif font-semibold dark:text-white", children: fields.description })), fields.subDescription && (_jsx("p", { className: "border-debug text-center text-gray-500 dark:text-gray-200", children: fields.subDescription }))] }) }) }));
};
export default HeaderCenterComponent;
//# sourceMappingURL=HeaderCenterComponent.js.map