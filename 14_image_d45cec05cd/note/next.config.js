/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    //url이달라질떄
    //소스코드를 다이렉션으로유도함
    return [
      {
        source: "/products/deleted_forever",
        destination: `/products`,
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: `/products`,
        permanent: false,
      },
    ];
  },
  async rewrites(){
    //다이렉트코드를 소스코드로바꿈
    return [
      {
        source: "/products/deleted_forever",
        destination: `/products`,
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: `/products`,
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
