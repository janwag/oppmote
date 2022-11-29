export default {
	name: 'data',
	title: 'Data',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'code',
			title: 'Code',
			type: 'number',
		},
		{
			name: 'className',
			title: 'Title in app',
			type: 'string',
		},
		{
			name: 'classes',
			title: 'classses',
			type: 'array',
			of: [{ type: 'classes' }],
		},

		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		},
	],
}
