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
	{
		brand: 'Apple',
		colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
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
		features: ['128GB Storage', 'Face ID', 'Cámara frontal de 12MP'],
		id: '1b3c2de7-3a10-4e9b-b8e7-b5c8a1234563',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'iPhone 13',
		price: 999.99,
		slug: 'iphone-13',
		variants: [
			{
				color: '#FFFFFF',
				color_name: 'Blanco',
				id: 'a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11',
				price: 999.99,
				stock: 5,
				storage: '128GB',
			},
		],
	},
	{
		brand: 'Xiaomi',
		colors: [{ color: '#FF0000', color_name: 'Rojo' }],
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
		features: ['6GB RAM', 'Batería 5000mAh', 'Pantalla 90Hz'],
		id: 'e5a1d2be-5b60-4f3e-b8d1-a3c98c123abd',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Xiaomi Redmi Note 10',
		price: 299.99,
		slug: 'xiaomi-redmi-note-10',
		variants: [
			{
				color: '#FF0000',
				color_name: 'Rojo',
				id: 'b2c3d4f5-fe26-4e08-8e0f-17a58bd43c12',
				price: 299.99,
				stock: 15,
				storage: '128GB',
			},
		],
	},
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
		id: 'f8c3b4a9-4d3a-4f6b-a8d1-b3c78c143cde',
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

export const recentProducts = [
	{
		brand: 'Samsung',
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
		name: 'Samsung A55 5G',
		price: 449.99,
		slug: 'samsung-a55-5g',
		variants: [
			{
				color: '#000000',
				color_name: 'Negro',
				id: 'a4e814b7-fe26-4e08-8a6f-13a39da43e52',
				price: 449.99,
				stock: 10,
				storage: '256GB',
			},
		],
	},
	{
		brand: 'Apple',
		colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
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
		features: ['128GB Storage', 'Face ID', 'Cámara frontal de 12MP'],
		id: '1b3c2de7-3a10-4e9b-b8e7-b5c8a1234167',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'iPhone 13',
		price: 999.99,
		slug: 'iphone-13',
		variants: [
			{
				color: '#FFFFFF',
				color_name: 'Blanco',
				id: 'a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11',
				price: 999.99,
				stock: 5,
				storage: '128GB',
			},
		],
	},
	{
		brand: 'Xiaomi',
		colors: [{ color: '#FF0000', color_name: 'Rojo' }],
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
		features: ['6GB RAM', 'Batería 5000mAh', 'Pantalla 90Hz'],
		id: 'e5a1d2be-5b60-4f3e-b8d1-a3c98c123abe',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Xiaomi Redmi Note 10',
		price: 299.99,
		slug: 'xiaomi-redmi-note-10',
		variants: [
			{
				color: '#FF0000',
				color_name: 'Rojo',
				id: 'b2c3d4f5-fe26-4e08-8e0f-17a58bd43c12',
				price: 299.99,
				stock: 15,
				storage: '128GB',
			},
		],
	},
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
		slug: 'huawei-p40-pro',
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
