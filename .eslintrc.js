module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
		"react/react-in-jsx-scope": "off",
  }
}
