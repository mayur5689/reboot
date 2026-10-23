/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/icons', '@portabletext/editor'],
    async redirects() {
        return [
            {
                source: '/services/hydrotherapy',
                destination: '/services/aqua-therapy',
                permanent: true,
            },
            {
                source: '/services/sports-psychology',
                destination: '/services/mental-training',
                permanent: true,
            },
            {
                source: '/services/counselling-%26-mental-training',
                destination: '/services/mental-training',
                permanent: true,
            },
            {
                source: '/services/counselling-mental-training',
                destination: '/services/mental-training',
                permanent: true,
            },
            {
                source: '/services-demo/aqua-therapy',
                destination: '/services/aqua-therapy',
                permanent: true,
            },
            {
                source: '/services/aqua-therapy-mumbai',
                destination: '/services/aqua-therapy',
                permanent: true,
            },
            {
                source: '/corporate-wellness',
                destination: '/employee-wellness',
                permanent: true,
            },
            // City-wide service hubs live at /services/{slug}. Duplicate landings 301 here.
            {
                source: '/sports-massage-mumbai',
                destination: '/services/sports-massage',
                permanent: true,
            },
            {
                source: '/physiotherapy-mumbai',
                destination: '/services/physiotherapy',
                permanent: true,
            },
            {
                source: '/clinical-pilates-mumbai',
                destination: '/services/clinical-pilates',
                permanent: true,
            },
            {
                source: '/pilates-mumbai',
                destination: '/services/clinical-pilates',
                permanent: true,
            },
            {
                source: '/reformer-pilates-mumbai',
                destination: '/services/clinical-pilates',
                permanent: true,
            },
            {
                source: '/aqua-therapy-mumbai',
                destination: '/services/aqua-therapy',
                permanent: true,
            },
            {
                source: '/athlete-screening-mumbai',
                destination: '/services/athlete-screening',
                permanent: true,
            },
            {
                source: '/contrast-therapy-mumbai',
                destination: '/services/contrast-therapy',
                permanent: true,
            },
            {
                source: '/team',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/team/',
                destination: '/about',
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


