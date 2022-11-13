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
			name: 'arbeidsgrupper',
			title: 'Arbeidsgrupper',
			type: 'number',
		},
		{
			name: 'storgrupper',
			title: 'Storgrupper',
			type: 'number',
		},
		{
			name: 'oppgaver',
			title: 'Oppgaver',
			type: 'number',
		},
		{
			name: 'kommentering',
			title: 'Kommentering',
			type: 'number',
		},
		{
			name: 'seminar',
			title: 'Seminar',
			type: 'number',
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
