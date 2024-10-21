/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.amdoinitiative.org',
    generateRobotsTxt: true,
    // optional: generate an additional sitemap.xml.gz
    generateIndexSitemap: false,
    // optional: ignore specific pages
    exclude: ['/server-sitemap.xml'],
    // optional: add additional sitemap
    additionalSitemaps: [
      'https://www.amdoinitiative.org/server-sitemap.xml',
    ],
  }