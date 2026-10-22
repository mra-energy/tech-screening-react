import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "react-refresh": reactRefresh },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
  },
];
