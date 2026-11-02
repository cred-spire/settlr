// Shared site data. Image URLs point at the assets in the Paper file;
// download them into /static/images and swap the paths if you want them self-hosted.
const ASSET = 'https://app.paper.design/file-assets/01M63HP1KJM0XVD7743K7KRXWP';

export const images = {
	homeLedger: `${ASSET}/01M63MH3VG4KVRCGYJP1M7P84S.png`,
	homeFounder: `${ASSET}/01M63MHKRQKN4J8JSSB75BNT7P.png`,
	productHero: `${ASSET}/01M63MHWCEZ0Q2PQT610S9004J.png`,
	industriesA: `${ASSET}/01M63MJ2W6DR4P3BT100RV6GR0.png`,
	industriesB: `${ASSET}/01M63MJ2W8BCX88J2KJNPQEXH8.png`,
	earlyAccessHero: `${ASSET}/01M63MJ81EJA4P6MBWPZ5G4EES.png`
};

export const nav = [
	{ href: '/product', label: 'Product' },
	{ href: '/industries', label: 'Industries' },
	{ href: '/early-access', label: 'Early access' },
	{ href: '/pricing', label: 'Pricing' }
];

export const footerColumns = [
	{
		title: 'Product',
		links: [
			'Corporate cards',
			'Accounts payable',
			'Procurement',
			'Reimbursements',
			'UPI for business',
			'GST input credit',
			'Integrations'
		].map((label) => ({ label, href: '/product' }))
	},
	{
		title: 'Industries',
		links: [
			'Financial services',
			'Manufacturing',
			'Construction',
			'SaaS',
			'D2C brands',
			'Non-profits'
		].map((label) => ({ label, href: '/industries' }))
	},
	{
		title: 'Company',
		links: [
			{ label: 'Early access', href: '/early-access' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Trust center', href: '#' },
			{ label: 'Careers', href: '#' },
			{ label: 'Blog', href: '#' },
			{ label: 'Contact', href: '#' }
		]
	}
];
