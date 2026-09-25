import eslintReact from "@eslint-react/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y-x";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintReactPreset = eslintReact.configs["recommended-typescript"];

const hooksRulesAlsoInEslintReact = Object.keys(
  reactHooks.configs.flat.recommended.rules
).filter(
  (rule) =>
    `@eslint-react/${rule.slice("react-hooks/".length)}` in
    eslintReactPreset.rules
);

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  reactHooks.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintReactPreset,
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@eslint-react/no-missing-component-display-name": "error",
      ...Object.fromEntries(
        hooksRulesAlsoInEslintReact.map((rule) => [rule, "off"])
      ),
    },
  },
  jsxA11y.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
];

export default eslintConfig;
