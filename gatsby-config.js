module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "haggen-cv",
  },
  plugins: ["gatsby-plugin-emotion", {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `johan-hagg-cv`,
      short_name: `jh-cv`,
      start_url: `/`,
      background_color: `#86C232`,
      theme_color: `#86C232`,
      display: `minimal-ui`,
      icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
    }}],
};
