/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
	extends: [
		'stylelint-config-standard-scss',
	],
	rules: {
		'comment-whitespace-inside': 'always',
		'no-invalid-position-at-import-rule': true,
		'string-no-newline': true,
		'custom-property-no-missing-var-function': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'no-empty-source': null,
		'alpha-value-notation': 'number',
		'color-function-notation': 'legacy',
		'selector-class-pattern': ['^\.([a-z](-[a-z0-9]+)*)+(__[a-z0-9]+(-[a-z0-9]+)?)?(--[a-z0-9]+(-[a-z0-9]+)?){0,2}$', {resolveNestedSelectors: true}],
		'rule-empty-line-before': 'always',
		'declaration-empty-line-before': 'never',
		'import-notation': 'string',
		'block-no-empty': true,
		'scss/dollar-variable-empty-line-before': 'always',
		'scss/dollar-variable-empty-line-before': 'always',
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: [],
			},
		],
		'selector-pseudo-element-colon-notation': 'double',
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
		'rule-empty-line-before': 'always-multi-line',
		'unit-allowed-list': [
			[
				'rem',
				'em',
				'%',
				'vh',
				'vw',
				's',
				'ms',
				'vmin',
				'vmax',
				'deg',
				'fr',
				'px'
			],
			{
				ignoreProperties: {
					px: [
						'/^border|outline|box-shadow/',
					],
				},
			},
		],
	},
};
