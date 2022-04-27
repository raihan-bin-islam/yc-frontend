/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: "node.pickupexpressbd.com/",
    baseUrlForImages: "",
  },
};

module.exports = nextConfig;
