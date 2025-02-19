import { jsx as _jsx } from "react/jsx-runtime";
import Markdown from "../ui/Markdown";
const RichTextComponent = ({ post }) => {
    return _jsx(Markdown, { description: post.fields.body });
};
export default RichTextComponent;
//# sourceMappingURL=RichTextComponent.js.map