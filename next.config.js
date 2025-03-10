/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [
      // Add any image domains you're using
    ],
  },
}

module.exports = nextConfig
