import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// Pull CJS export through require to avoid ESM import issues:
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    // baseDirectory is optional unless you resolve shareable configs/plugins from custom locations
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    // Bring in Next.js + Prettier legacy configs
    ...compat.extends("next/core-web-vitals", "plugin:prettier/recommended"),

    // Your project defaults
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: { ...globals.browser, ...globals.node },
        },
    },

    // Ignore build artifacts
    { ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**"] },
]);
