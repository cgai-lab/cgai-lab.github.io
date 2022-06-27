/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

const Seo = ({ description = ``, lang = `en`, meta = [], title }: IProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : `cgai-lab`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        rel="icon"
        type="image/x-cion"
        href="data:image/png;base64,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"
      />
    </Helmet>
  );
};

export default Seo;
