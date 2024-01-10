module.exports = {
  extends: ['stylelint-config-recommended'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'layer', 'responsive', 'screen', 'tailwind', 'variants'],
      },
    ],
    'no-descending-specificity': null,
  },
  ignoreFiles: ['dist/output.css', 'dist/_astro/*'],
}
