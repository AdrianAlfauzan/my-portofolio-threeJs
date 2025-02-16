import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,
    allowedHosts: ["7e7c-66-96-225-188.ngrok-free.app"],
  },
});
