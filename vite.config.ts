import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),

    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
  ];

  if (command === "build") {
    try {
      const { nitro } = await import("nitro/vite");
      const nitroPlugins = nitro({
        defaultPreset: "cloudflare-module",
      });
      // Patch nitro plugins to prevent "TypeError: Cannot read properties of undefined (reading 'meta')" in Vite 6 config hook
      const patched = (Array.isArray(nitroPlugins) ? nitroPlugins : [nitroPlugins]).map((plugin: any) => {
        if (plugin && typeof plugin === "object" && typeof plugin.config === "function") {
          const originalConfig = plugin.config;
          plugin.config = function (this: any, ...args: any[]) {
            const context = this || { meta: {} };
            return originalConfig.apply(context, args);
          };
        }
        return plugin;
      });
      plugins.push(...patched);
    } catch (e) {
      console.warn("Could not load nitro plugin:", e);
    }
  }

  return {
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      tsconfigPaths: true,
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
  };
});
