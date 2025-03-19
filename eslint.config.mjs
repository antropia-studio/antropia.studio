import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  prettier,
  ...eslintPluginAstro.configs.recommended,
];
