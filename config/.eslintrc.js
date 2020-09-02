const rules = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react-perf',
    'immutable',
    'import',
    'xss',
    'compat',
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    // Disabled rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // General rules
    'no-var': 'error',
    'no-param-reassign': 'error',
    'prefer-template': 'error',
    'no-duplicate-case': 'error',
    eqeqeq: 'error',
    'object-shorthand': 'error',
    'default-case': 'error',
    'no-duplicate-imports': 'error',
    'no-shadow': 'error',
    yoda: 'error',
    'no-extra-boolean-cast': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'no-console': ['warn', { allow: ['error'] }],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-else-return': 'warn',
    'default-param-last': 'warn',
    //'@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-for-of': 'error',

    // React rules
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/self-closing-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-array-index-key': 'error',
    'react/no-unknown-property': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-children-prop': 'error',
    'react/no-multi-comp': 'error',
    'react/jsx-handler-names': 'error',
    'react/prefer-stateless-function': 'error',

    // React hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // React performance oriented rules
    'react-perf/jsx-no-new-object-as-prop': 'warn',
    'react-perf/jsx-no-new-array-as-prop': 'warn',
    'react-perf/jsx-no-new-function-as-prop': 'warn',
    'react-perf/jsx-no-jsx-as-prop': 'warn',

    // Immutability rules
    'immutable/no-let': 'error',
    'immutable/no-mutation': 'error',

    // Import / Export rules
    'import/default': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/prefer-default-export': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-named-export': 'error',
    'import/no-named-as-default': 'error',

    // Security rules
    'xss/no-location-href-assign': 'error',

    // Browser compatibility rules based on browserslist config
    'compat/compat': 'warn',
  },
  // Overrides specific rules for Next pages
  overrides: [
    {
      files: ['pages/**/*.tsx'],
      rules: {
        'import/no-named-export': 'off',
      },
    },
  ],
  // Tells eslint-plugin-react to automatically detect the version of React to use
  settings: { react: { version: 'detect' } },
};

module.exports = rules;
