module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.png$/,
      use: ["url-loader"],
    });

    return config;
  },
};
