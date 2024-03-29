module.exports = {
	root: true,
	env: {
		es2024: true,
		browser: true,
		amd: true,
		node: true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:editorconfig/noconflict',
		'plugin:prettier/recommended',
	],
	overrides: [
		// TypeScript
		{
			files: ['*.ts', '*.mts', '*.cts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:@typescript-eslint/stylistic-type-checked',
				'plugin:import/typescript',
			],
			plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
			rules: {
				'tsdoc/syntax': 'warn',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/consistent-type-definitions': 'error',
				'@typescript-eslint/no-require-imports': ['error'],
				'@typescript-eslint/no-unnecessary-condition': ['error'],
				'@typescript-eslint/no-useless-constructor': ['error'],
				'@typescript-eslint/prefer-readonly': ['error'],
				'@typescript-eslint/switch-exhaustiveness-check': ['error'],
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
					'error',
				],
				'@typescript-eslint/promise-function-async': [
					'error',
					{ checkArrowFunctions: false },
				],
				'@typescript-eslint/no-confusing-void-expression': [
					'error',
					{ ignoreArrowShorthand: true },
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'class',
						format: ['PascalCase'],
					},
				],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: [
							// Index signature for interfaces
							'signature',
							'call-signature',

							// Fields o variables
							'public-instance-field',
							'protected-instance-field',
							'private-instance-field',
							'#private-instance-field',

							'public-static-field',
							'protected-static-field',
							'private-static-field',
							'#private-static-field',

							'public-decorated-field',
							'protected-decorated-field',
							'private-decorated-field',

							'public-abstract-field',
							'protected-abstract-field',

							'public-field',
							'protected-field',
							'private-field',
							'#private-field',

							'instance-field',
							'static-field',
							'decorated-field',
							'abstract-field',

							'field',

							// Static initialization
							'static-initialization',

							// Constructors
							'public-constructor',
							'protected-constructor',
							'private-constructor',

							'constructor',

							// Methods
							'public-instance-method',
							'protected-instance-method',
							'private-instance-method',
							'#private-instance-method',

							'public-static-method',
							'protected-static-method',
							'private-static-method',
							'#private-static-method',

							'public-decorated-method',
							'protected-decorated-method',
							'private-decorated-method',

							'public-abstract-method',
							'protected-abstract-method',

							'public-method',
							'protected-method',
							'private-method',
							'#private-method',

							'instance-method',
							'static-method',
							'decorated-method',
							'abstract-method',

							'method',

							// Getters
							'public-instance-get',
							'protected-instance-get',
							'private-instance-get',
							'#private-instance-get',

							'public-static-get',
							'protected-static-get',
							'private-static-get',
							'#private-static-get',

							'public-decorated-get',
							'protected-decorated-get',
							'private-decorated-get',

							'public-abstract-get',
							'protected-abstract-get',

							'public-get',
							'protected-get',
							'private-get',
							'#private-get',

							'instance-get',
							'static-get',
							'decorated-get',
							'abstract-get',

							'get',

							// Setters
							'public-instance-set',
							'protected-instance-set',
							'private-instance-set',
							'#private-instance-set',

							'public-static-set',
							'protected-static-set',
							'private-static-set',
							'#private-static-set',

							'public-decorated-set',
							'protected-decorated-set',
							'private-decorated-set',

							'public-abstract-set',
							'protected-abstract-set',

							'public-set',
							'protected-set',
							'private-set',
							'#private-set',

							'instance-set',
							'static-set',
							'decorated-set',
							'abstract-set',

							'set',
						],
					},
				],
			},
			// settings: {
			// 	'import/resolver': {
			// 		typescript: {},
			// 	},
			// }
		},
		{
			files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': ['error'],
			},
		},

		// JSDoc
		{
			files: ['*.js', '*.jsx', '*.mjs', '*.cjs'],
			extends: ['plugin:jsdoc/recommended'],
			plugins: ['jsdoc'],
		},

		// Testing
		{
			files: [
				'*.test.ts',
				'*.test.js',
				'*.spec.ts',
				'*.spec.js',
				'*.e2e.ts',
				'*.e2e.js',
			],
			extends: [
				'plugin:jest/recommended',
				'plugin:jest/style',
				// 'plugin:jest-dom/recommended',
				// 'plugin:testing-library/dom',
				'plugin:playwright/recommended',
			],
			plugins: ['jest' /*, 'jest-dom', 'testing-library'*/],
			// rules: {
			// 	'prefer-equality-matcher': 'error',
			// },
		},
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'import',
		'simple-import-sort',
		'unused-imports',
		'check-file',
		'editorconfig',
		'sort-class-members',
		'@stylistic',
	],
	rules: {
		'prettier/prettier': 'error',

		// Error prevention
		'array-callback-return': ['error', { checkForEach: true }],
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-private-class-members': 'error',
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		'require-atomic-updates': 'error',
		'no-lone-blocks': 'error',
		'no-underscore-dangle': 'error', // Opcional

		// Good practices
		camelcase: 'error',
		eqeqeq: 'error',
		'new-cap': 'error',
		'no-array-constructor': 'error',
		'no-console': ['error', { allow: ['error'] }],
		'no-else-return': ['error', { allowElseIf: false }],
		'no-extend-native': 'error',
		'no-lonely-if': 'error',
		'no-param-reassign': 'error',
		'no-return-assign': 'error',
		'no-throw-literal': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-const': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		radix: 'error',
		yoda: 'error',
		'no-unneeded-ternary': 'error',
		'prefer-arrow-callback': 'error', // Opcional

		// Style
		'arrow-body-style': ['error', 'as-needed'],
		curly: 'error',
		'@stylistic/lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{ blankLine: 'always', prev: ['case', 'default'], next: '*' },
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{ blankLine: 'always', prev: 'expression', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'expression' },
			{ blankLine: 'any', prev: 'expression', next: 'expression' },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'any', prev: 'import', next: 'import' },
			{ blankLine: 'always', prev: 'export', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'export' },
			{ blankLine: 'any', prev: 'export', next: 'export' },
			{ blankLine: 'always', prev: 'if', next: '*' },
		],
		'sort-class-members/sort-class-members': [
			'error',
			{
				order: [
					'[properties]',
					'[conventional-private-properties]',
					'[static-properties]',
					'constructor',
					'[methods]',
					'[conventional-private-methods]',
					'[static-methods]',
				],
				accessorPairPositioning: 'getThenSet',
			},
		],

		//? CodelyTV
		'check-file/folder-naming-convention': [
			'error',
			{
				'./src/**/': 'KEBAB_CASE',
			},
		],

		// Plugins
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'unused-imports/no-unused-imports': 'error',
		// 'no-unused-vars': 'off', // Opcional. For code < ES6 code.
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
};
