import { defineConfig } from "vite";

export default defineConfig({
  base: "/resume-builder/",

  build: {
    assetsInlineLimit: 0
  },

  resolve: {
    tsconfigPaths: true
  }
});
