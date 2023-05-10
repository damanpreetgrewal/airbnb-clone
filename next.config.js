/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
