import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/h9ome',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/uncategorized',
        destination: '/services',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;

