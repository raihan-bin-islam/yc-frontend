/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: "https://ycadmin.yyventures.org/api",
    baseUrlForImages: "",
    youtubeApiKey: "AIzaSyB-erGj8FOrDWqnTP1j4pVY6qP21aVwNf0",
  },
  optimizeFonts: false,
  trailingSlash: true / false,
  images: {
    loader: "imgix",
    path: "https://yunus-centre.netlify.app/",
  },
  webpack5: false,

  async redirects() {
    return [
      {
        source: "/media",
        destination: "/media/news#",
        permanent: true,
      },
      {
        source: "/social-business",
        destination: "/social-business/concept",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
