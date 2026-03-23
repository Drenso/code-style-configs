/** @type {import('stylelint').Config} */
export default {
    extends: [
        '@drenso/stylelint-config',
        'stylelint-config-recommended-vue/scss',
    ],
    overrides: [
        {
            files: ['**/*.vue'],
            rules: {
                // Currently flags inline style attributes while it shouldn't
                'no-invalid-position-declaration': null,
            }
        }
    ]
};
