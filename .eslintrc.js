module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     ecmaFeatures: {
    //         jsx: true
    //     },
    //     ecmaVersion: 2018,
    //     sourceType: 'module'
    // },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
}
