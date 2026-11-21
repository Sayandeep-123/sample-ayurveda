import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/* BASE_URL is "/" in dev and "/sample-ayurveda/" in the production build —
   BrowserRouter needs it without the trailing slash. */
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const tree = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const container = document.getElementById("root")!;

/* Prerendered pages ship with server-rendered markup in #root — hydrate them.
   Plain loads (e.g. dev) render from scratch. */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
