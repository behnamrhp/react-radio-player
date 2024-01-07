module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "overrides": [
    {
      "files": [
        "lib/**/*.stories.tsx"
      ],
      "rules": {
        "react-hooks/rules-of-hooks": "off"
      }
    }
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "maxLineLength": 80
      }
    ]
  },
}
