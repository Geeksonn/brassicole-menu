/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
