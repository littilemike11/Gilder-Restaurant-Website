import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [
    tailwindcss(),
    react(),
    viteStaticCopy({
      targets: [{ src: "public/_redirects", dest: "." }],
    }),
  ],
  base: "/", // Keep this since you're using a custom domain
  server: {
    proxy: {
      "/api": "http://localhost:3000/",
    },
  },
});
