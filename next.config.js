/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: "https://node.pickupexpressbd.com/api",
    baseUrlForImages: "",
    youtubeApiKey: "AIzaSyB-erGj8FOrDWqnTP1j4pVY6qP21aVwNf0",
  },
  images: {
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
};

module.exports = nextConfig;
