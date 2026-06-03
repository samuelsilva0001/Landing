import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// NOTE: `base` é configurado via env var VITE_BASE para suportar GitHub Pages.
// Em produção, defina VITE_BASE="/nome-do-repositorio/" antes do build.
// Ex: VITE_BASE="/respondeai/" npm run build
export default defineConfig(() => ({
  base: process.env.VITE_BASE || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
