import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works whether it's hosted at the root of a
// GitHub Pages user site (username.github.io) or under a project path
// (username.github.io/repo-name/) without any changes.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
