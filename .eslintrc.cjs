module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    "comma-spacing": ["error", { before: false, after: true }],
        "spaced-comment": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error"
        "react/prop-types": "off",
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow tsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }]
    }
}
