export const products = [
	{
		brand: 'Plumrose',
		colors: [{ color: '#000000', color_name: 'Negro' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Descripción de prueba',
						},
					],
				},
			],
		},
		features: ['8GB RAM', 'Dual SIM', 'Cámara trasera de 48MP'],
		id: '4f53b2ea-2a40-4ec7-a6d0-b7c95888ff',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Jamon de pierna',
		price: 9.99,
		slug: 'jamon-de-pierna-plumrose',
		variants: [
			{
				color: '#000000',
				color_name: 'Negro',
				id: 'a4e814b7-fe26-4e08-8a6f-13a39da43e52',
				price: 9.99,
				stock: 10,
				// storage: '256GB',
			},
		],
	},
];

export const recentProducts = [
	{
		brand: 'Huawei',
		colors: [{ color: '#0000FF', color_name: 'Azul' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Descripción de prueba',
						},
					],
				},
			],
		},
		features: ['128GB RAM', 'Pantalla OLED', 'Carga rápida'],
		id: 'f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12wcde',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Huawei P40 Pro',
		price: 799.99,
		slug: 'huawei-p40-pro',
		variants: [
			{
				color: '#0000FF',
				color_name: 'Azul',
				id: 'c1d2e3f4-fe26-4e08-8f1e-18a69bd45d13',
				price: 799.99,
				stock: 8,
				storage: '256GB',
			},
		],
	},
];

export const popularProducts = [
	{
		brand: 'Huawei',
		colors: [{ color: '#800080', color_name: 'Púrpura' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Descripción de prueba',
						},
					],
				},
			],
		},
		features: ['128GB RAM', 'Pantalla OLED', 'Carga rápida'],
		id: 'f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12fcde',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Huawei P40 Pro',
		price: 799.99,
		slug: 'huawei-p40-carlos',
		variants: [
			{
				color: '#800080',
				color_name: 'Púrpura',
				id: 'i1j2k3l4-fe26-4e08-9g5f-27a50gj13m22',
				price: 799.99,
				stock: 8,
				storage: '256GB',
			},
		],
	},

];
