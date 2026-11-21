import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SITE_BASENAME } from "@/lib/siteBase";

const tree = (
  <StrictMode>
    <BrowserRouter basename={SITE_BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const container = document.getElementById("root")!;

/* Prerendered pages ship server-rendered markup in #root — hydrate them.
   If hydration throws or reports an unrecoverable mismatch, fall back to a
   clean client render instead of leaving the page broken. The prerendered
   content itself stays visible in every case (see the reveal failsafe in
   index.html). */
try {
  if (container.hasChildNodes()) {
    hydrateRoot(container, tree, {
      onRecoverableError: (error) => {
        console.warn("Hydration issue — re-rendering client-side:", error);
        createRoot(container).render(tree);
      },
    });
  } else {
    createRoot(container).render(tree);
  }
} catch (error) {
  console.warn("Hydration failed — rendering client-side:", error);
  createRoot(container).render(tree);
}
