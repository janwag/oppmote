export default {
	title: 'Info',
	name: 'info',
	type: 'document',
	fields: [
		{
			title: 'Om tjenesten',
			name: 'about',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
		{
			title: 'Hem står bak tjenesten',
			name: 'whoMadeIt',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
		{
			title: 'Vilkår og ansvarsfraskrivelse',
			name: 'userAgreement',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
		{
			title: 'Sist oppdatert',
			name: 'lastUpdate',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
}
