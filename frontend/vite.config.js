import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api": "https://localhost:3000/",
    },
  },
});
