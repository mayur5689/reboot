/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/icons', '@portabletext/editor'],
    async redirects() {
        return [
            {
                source: '/services/contrast-therapy',
                destination: '/contrast-therapy-mumbai',
                permanent: true,
            },
            {
                source: '/services/hydrotherapy',
                destination: '/services/aqua-therapy',
                permanent: true,
            },
            {
                source: '/services/counselling-%26-mental-training',
                destination: '/services/counselling-mental-training',
                permanent: true,
            },
            {
                source: '/services-demo/aqua-therapy',
                destination: '/aqua-therapy-mumbai',
                permanent: true,
            },
            {
                source: '/Aqua-therapy-mumbai',
                destination: '/aqua-therapy-mumbai',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
        ]
    }
}

module.exports = nextConfig


