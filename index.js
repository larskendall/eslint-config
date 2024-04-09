module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:promise/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    es2020: true,
  },
  globals: {},
  plugins: [
    "@typescript-eslint",
    "chai-friendly",
    "import",
    "jsx-a11y",
    "mocha-no-only",
    "only-warn",
    "promise",
    "react",
    "react-hooks",
  ],
  ignorePatterns: ["**/*.html"],
  rules: {
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/return-await": "off",
    "arrow-body-style": "off",
    "chai-friendly/no-unused-expressions": [
      "warn",
      { allowShortCircuit: true },
    ],
    "class-methods-use-this": "off",
    "default-case": "off",
    "func-names": "off",
    "global-require": "off",
    "import/no-cycle": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: [
          "**/*.spec.js",
          "gulpfile.ts/*.ts",
          "**/webpack.config.ts",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "max-len": "off",
    "mocha-no-only/mocha-no-only": "warn",
    "no-await-in-loop": "off",
    "no-console": "off",
    "no-continue": "off",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-prototype-builtins": "off",
    "no-restricted-syntax": [
      "warn",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-void": "off",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "promise/always-return": "off",
    radix: "off",
    "require-await": "off",
    "valid-typeof": "off",
  },
};
