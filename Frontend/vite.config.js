import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      png: {
        quality: [0.6, 0.8],
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
});
