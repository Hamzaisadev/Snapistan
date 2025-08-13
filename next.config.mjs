/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
  images: {
    domains: ['utfs.io', '*.ufs.sh'],
    remotePatterns: [
      // For production
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/f/**',
      },
      // For development
      {
        protocol: 'https',
        hostname: '*.ufs.sh',
        pathname: '/a/**',
      },
      // Fallback patterns
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: `/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/**`,
      },
      {
        protocol: 'https',
        hostname: '*.ufs.sh',
        pathname: `/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/**`,
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
