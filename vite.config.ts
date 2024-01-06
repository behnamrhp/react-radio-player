import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import dts from "vite-plugin-dts";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    root: "./test",
    coverage: {
      provider: "v8",
      reporter: ["lcov", "clover"],
      reportsDirectory: "../coverage",
    },
  },
  plugins: [
    react(),
    dts({ include: ["lib"] }),
    visualizer({
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
}) as unknown as VitestConfigExport;
