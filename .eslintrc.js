module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
        jest: true,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [2, 4],
        'no-console': 'warn',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],
        'max-len': ['warn', { code: 100, tabWidth: 4, ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
