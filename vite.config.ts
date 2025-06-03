import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/my-web-component.jsx"),
      name: "MyWebComponent",
      fileName: (format) => `my-web-component.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
    },
  },
});
