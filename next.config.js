/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: {
			sourceMap: true,
			autoLabel: 'dev-only',
			labelFormat: '[filename]--[local]'
		}
	}
};

module.exports = nextConfig;
