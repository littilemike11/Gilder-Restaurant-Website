import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [tailwindcss(), react()],
  base: "/",
  server: {
    proxy: {
      "/api": process.env.VITE_API_URL || "http://localhost:3000/",
    },
  },
});
