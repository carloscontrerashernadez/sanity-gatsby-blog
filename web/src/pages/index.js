import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { ChakraProvider } from "@chakra-ui/react"
import IndexHero from '../components/index-hero'
import IndexTestimonials from "../components/index-testimonials"


import {theme} from '../components/theme'
import Feed from '../components/index-blog-feed'
import Footer from '../components/footer'
import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }



    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt 
             asset {
              url
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
          }
          authors {
            author {
              name
            }
          }
        }
      }
    }



    pages: allSanityHomePage(
      limit: 1
      
     
    ) {
      edges {
        node {
          id
      
          title
          subtitle
          cta
       
        }
      }
    }
  }
`;

const IndexPage = (props) => {
 

  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  const page =data.pages.edges[0].node;

  const postNodes = (data || {}).posts
  ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
  : [];
 

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }


  return (
    <ChakraProvider theme={theme}>
    <Layout>

 
<IndexHero title={page.title} subtitle={page.subtitle} cta={page.cta}/>
<Feed nodes={postNodes}/>
<IndexTestimonials/>
    </Layout>
    </ChakraProvider>
  );
};

export default IndexPage;
