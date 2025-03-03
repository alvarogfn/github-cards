module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/alvarogfn",
        permanent: true,
      },
    ];
  },
};
