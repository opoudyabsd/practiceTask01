import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // Includes process, require, module, etc.
        ...globals.browser, // Includes window, document, etc.
        $: "readonly",
        $$: "readonly",
        browser: "readonly",
        process: "readonly", // Ensure process.env is not flagged
        it: "readonly",
        describe: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        expect: "readonly"
      },
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
]);

