module.exports = {
  siteMetadata: {
    title: 'Using gatsby-remark-images with gatsby-mdx',
    siteUrl: 'https://raulrpearson.github.io/using-gatsby-mdx-remark-images' // no trailling slash
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.jsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650
            }
          }
        ]
      }
    }
  ]
};
