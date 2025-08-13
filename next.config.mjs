/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
  images: {
    domains: [
      'utfs.io',
      '*.ufs.sh',
      '76q749pxf2.ufs.sh',
    ],
    remotePatterns: [
      // Handle all utfs.io URLs
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '**',
      },
      // Handle all ufs.sh subdomains
      {
        protocol: 'https',
        hostname: '*.ufs.sh',
        pathname: '**',
      },
    ],
  },
  rewrites: () => {
    return [
      {
        source: "/hashtag/:tag",
        destination: "/search?q=%23:tag",
      },
    ];
  },
};

export default nextConfig;
