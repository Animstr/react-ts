import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
    i18next.configs['flat/recommended'],
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        "settings": {
            "react": {
                "version": "detect"  // Это позволит ESLint автоматически определить версию React, которую использует проект
            }
        },
        "rules": {
            "indent": [2, 4],
            "@typescript-eslint/no-empty-object-type": "warn",
            "no-empty-pattern": "off",
            "react/react-in-jsx-scope": 'off',
            "@typescript-eslint/no-unused-vars": 'warn',
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': 'error'
        },
        env: {
            browser: true,
            es6: true,
            jest: true,
        },
    }
];