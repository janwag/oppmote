export default {
	name: 'chagelog',
	title: 'Chagelog',
	type: 'document',
	fields: [
		{
			title: 'Tekst',
			name: 'text',
			type: 'string',
		},
		{
			title: 'Endrings dato',
			name: 'date',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'Today',
			},
		},
	],
}
