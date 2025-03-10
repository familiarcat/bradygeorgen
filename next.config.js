/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion", "reactflow"],
  eslint: { ignoreDuringBuilds: true },
  output: 'standalone',
  images: { 
    domains: ['localhost'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
};
module.exports = nextConfig;
