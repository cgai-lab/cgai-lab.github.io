import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cgai-lab.github.io`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:100,300,400,500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `30hhxg6atzue`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
