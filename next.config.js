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
                destination: '/services/sports-psychology',
                permanent: true,
            },
            {
                source: '/services/counselling-mental-training',
                destination: '/services/sports-psychology',
                permanent: true,
            },
            {
                source: '/services-demo/aqua-therapy',
                destination: '/aqua-therapy-mumbai',
                permanent: true,
            },
            {
                source: '/services/aqua-therapy-mumbai',
                destination: '/aqua-therapy-mumbai',
                permanent: true,
            },
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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


