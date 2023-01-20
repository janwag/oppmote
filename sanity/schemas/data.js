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
			name: 'Gruppe1',
			title: 'Gruppe1',
			type: 'array',
			of: [{ type: 'classes' }],
		},
		{
			name: 'Gruppe2',
			title: 'Gruppe2',
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
