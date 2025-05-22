module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sort-imports-es6-autofix',
    '@stylistic/ts',
    '@stylistic/js',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'scripts/**/*',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { "allowExpressions": true, }
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/ts/semi': ['error', 'always'],
    '@stylistic/js/eol-last': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    '@stylistic/js/max-len': ['error', { code: 150 }],
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    '@stylistic/ts/block-spacing': ['error', 'always'],
    '@stylistic/ts/keyword-spacing': ['error', {
      'before': true,
      'after': true,
    }],
    '@stylistic/ts/brace-style': ['error', '1tbs', {
      'allowSingleLine': false,
    }],
    '@stylistic/ts/comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    '@stylistic/ts/function-call-spacing': ['error', 'never'],
    '@stylistic/ts/key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict',
    }],
    '@stylistic/ts/member-delimiter-style': ['error', {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      },
      "multilineDetection": "brackets"
    }],
    '@stylistic/ts/space-before-blocks': ['error', 'always'],
    '@stylistic/ts/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    '@stylistic/ts/type-annotation-spacing': 'error',
    '@stylistic/js/arrow-spacing': ['error', {
      'before': true,
      'after': true,
    }],
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          {
            "group": ["src/*"],
            "message": "Absolute imports are not allowed."
          }
        ]
      }
    ]
  },
};
