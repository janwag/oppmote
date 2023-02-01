export default {
	name: 'data',
	title: 'Data',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Navn',
			type: 'string',
			description: 'Navn på fag.',
		},
		{
			name: 'code',
			title: 'Kode',
			type: 'number',
			description: 'Fag kode.',
		},
		{
			name: 'className',
			title: 'Titl i app',
			type: 'string',
			description: 'Navnet som vil bli vist i appen på oversikts siden.',
		},
		{
			name: 'Gruppe1',
			title: 'Arbeid og storgrupper',
			type: 'array',
			of: [{ type: 'classes' }],
			description: 'Legg kun til arbeid og storgrupper i dette feltet. NB: Husk å bruk stor forbokstav på navnet.',
		},
		{
			name: 'Gruppe2',
			title: 'Andre fag',
			type: 'array',
			of: [{ type: 'classes' }],
			description: 'Legg kun til alle andre fag i dette feltet. NB: Husk å bruk stor forbokstav på navnet.',
		},

		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			description: 'Trykk på "generate" for å lage slug.',
		},
	],
}
