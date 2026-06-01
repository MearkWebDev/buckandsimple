import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Base path for GitHub Pages deployment at https://<user>.github.io/buckandsimple/
export default defineConfig({
  base: "/buckandsimple/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
});
