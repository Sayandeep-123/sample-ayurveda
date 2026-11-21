import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* The site deploys to a GitHub Pages *project* site: everything lives under
   /sample-ayurveda/. This is the one source of truth — it is injected into
   app code as __SITE_BASE__ (see src/lib/siteBase.ts) and passed to the
   singlefile plugin via overrideConfig, because that plugin forcibly sets
   base to "./" in its recommended build config (which broke basename-based
   routing once already). */
const SITE_BASE = "/sample-ayurveda/";

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: SITE_BASE,
  define: {
    __SITE_BASE__: JSON.stringify(SITE_BASE),
  },
  // singlefile inlines JS/CSS into index.html for the client build only —
  // the SSR build (src/entry-server.tsx) just needs plain modules.
  plugins: [
    react(),
    tailwindcss(),
    ...(isSsrBuild ? [] : [viteSingleFile({ overrideConfig: { base: SITE_BASE } })]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
