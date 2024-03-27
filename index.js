module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    'node_modules/**',
    'build/**',
    'dist/**',
    'out/**',
    '.svelte-kit/**',
    '**/*.js',
    '**/.*',
    '**/*.ts',
  ],
  plugins: ['stylelint-color-format'],
  rules: {
    'alpha-value-notation': 'number',
    'color-format/format': {
      format: 'hsl',
    },
    'color-function-notation': 'legacy';,
    'function-disallowed-list': ['rgb', 'rgba'];,
    'hue-degree-notation': 'number';,
    'no-invalid-position-at-import-rule': null,
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
