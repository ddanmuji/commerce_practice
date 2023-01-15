/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos', 'localhost']
	},
	compiler: {
		emotion: {
			sourceMap: true,
			autoLabel: 'dev-only',
			labelFormat: '[local]'
		}
	}
};

module.exports = nextConfig;
