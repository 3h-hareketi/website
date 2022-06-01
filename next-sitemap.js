/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https" + process.env.VERCEL_URL || "https://www.3hhareketi.org",
  generateRobotsTxt: true,
};
