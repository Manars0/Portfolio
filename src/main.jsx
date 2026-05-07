import { jsx } from "react/jsx-runtime";
import "./styles/index.css";
import App from "./app/App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Missing root element: #root");
}
createRoot(root).render(/* @__PURE__ */ jsx(App, {}));
