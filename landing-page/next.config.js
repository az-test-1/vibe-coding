/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/vibe-coding' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vibe-coding' : '',
}

module.exports = nextConfig

