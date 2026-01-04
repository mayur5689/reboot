/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/icons', '@sanity/table', '@portabletext/editor'],
}

module.exports = nextConfig

