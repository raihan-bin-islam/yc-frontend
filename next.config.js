/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: '',
    baseUrlForImages: '',
  },
}

module.exports = nextConfig
