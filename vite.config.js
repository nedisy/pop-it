import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    // Relative base keeps the build usable from GitHub Pages project subpaths
    // (https://nedisy.github.io/pop-it/) as well as from a domain root.
    base: "./",
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: "dist",
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./src/setupTests.js",
        pool: "threads",
        css: true,
    },
});
