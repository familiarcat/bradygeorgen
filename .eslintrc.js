module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/display-name': 'off',
    '@next/next/no-img-element': 'warn',
    'jsx-a11y/alt-text': 'warn'
  }
};