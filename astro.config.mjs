import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://almeidadecio.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
