module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': 1,
		'import/extensions': 0,
		'react/react-in-jsx-scope': 0,
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'no-param-reassign': 0,
	},
};
