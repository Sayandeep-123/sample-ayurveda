import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
// The site deploys to a GitHub Pages *project* site, so production assets
// live under /sample-ayurveda/. Dev serves from "/".
export default defineConfig(({ mode, isSsrBuild }) => ({
  base: mode === "development" ? "/" : "/sample-ayurveda/",
  // singlefile inlines JS/CSS into index.html for the client build only —
  // the SSR build (src/entry-server.tsx) just needs plain modules.
  plugins: [react(), tailwindcss(), ...(isSsrBuild ? [] : [viteSingleFile()])],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
