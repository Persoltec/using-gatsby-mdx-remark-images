module.exports = {
  pathPrefix: '/using-gatsby-mdx-remark-images',
  siteMetadata: {
    title: 'Using gatsby-remark-images with gatsby-mdx',
    siteUrl: 'https://raulrpearson.github.io/using-gatsby-mdx-remark-images' // no trailling slash
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
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
