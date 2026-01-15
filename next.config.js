/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/icons', '@sanity/table', '@portabletext/editor'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ]
    }
}

module.exports = nextConfig


