import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['.homeybuild'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.mts'],
        ignores: ['node_modules', '.homeybuild'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
            // Mark as warning to not block during dev work, and allow with description
            '@typescript-eslint/ban-ts-comment': [
                'warn',
                {
                    'ts-ignore': 'allow-with-description',
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
            ],
            '@typescript-eslint/no-import-type-side-effects': 'error',
            semi: [2, 'always'],
            'no-extra-semi': 'error',
            'no-restricted-syntax': [
                'error',
                {
                    selector: "CallExpression[callee.name='setInterval']",
                    message: 'Use homey.setInterval instead.',
                },
                {
                    selector: "CallExpression[callee.name='clearInterval']",
                    message: 'Use homey.clearInterval instead.',
                },
                {
                    selector: "CallExpression[callee.name='setTimeout']",
                    message: 'Use homey.setTimeout instead.',
                },
                {
                    selector: "CallExpression[callee.name='clearTimeout']",
                    message: 'Use homey.clearTimeout instead.',
                },
            ],
        },
    },
);
