const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myportfolio-alpha-neon.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
