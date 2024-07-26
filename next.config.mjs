/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tailgrids.com',
        port: '',
        pathname: '/2.0/image/assets/images/brands/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tailgrids.com',
        port: '',
        pathname: '/1.0/assets/images/hero/**',
      },
    ],
  },
};

export default nextConfig;
