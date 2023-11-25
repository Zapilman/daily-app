/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '18.197.70.51',
        port: '8080',
        pathname: '/api/static/**',
      },
    ],
  },
};

module.exports = nextConfig;
