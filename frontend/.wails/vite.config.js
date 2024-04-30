import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";

export default defineConfig({
    // Externalize `/wails/runtime.js` during build
    build: {
        rollupOptions: {
            external: ["/wails/runtime.js"],
        }
    },
    // Externalize `/wails/runtime.js` during dev mode
    // There is an ongoing issue to add external in dev mode: https://github.com/vitejs/vite/issues/6582
    plugins: [
        externalize({
            externals: ["/wails/runtime.js",],
        }),
    ],
});