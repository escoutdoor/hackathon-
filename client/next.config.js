/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4900/api/:path*',
			},
		]
	},
}

module.exports = nextConfig
