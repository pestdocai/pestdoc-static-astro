import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/landing/post-launch",
  },
  server: {
    port: 4321,
    host: true,
  },
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: [
        "@fontsource-variable/montserrat",
        "@fontsource-variable/dm-sans",
      ],
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
