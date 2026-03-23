/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
    ],
    rules: {
        'declaration-empty-line-before': null,
        'scss/dollar-variable-empty-line-before': null,
        'scss/load-no-partial-leading-underscore': null,
    }
};
