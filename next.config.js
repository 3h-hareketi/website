const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.graphassets.com",
      "avatars.githubusercontent.com",
      "localhost",
      "s.gravatar.com",
    ],
  },
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/hakkimizda",
      },
      {
        source: "/contact",
        destination: "/iletisim",
      },
      {
        source: "/projects",
        destination: "/projeler",
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
