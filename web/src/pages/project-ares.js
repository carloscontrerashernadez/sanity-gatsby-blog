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

import About from '../components/about-us'
import {theme} from '../components/theme'

import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import Hero from "../components/project-ares-hero"
import Features from '../components/feature-group'
import Cta from '../components/project-ares-cta'
 

export const query = graphql`
 

  query ProjectAresPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }


    data: allSanityProjectAresPage {
      edges {
        node {
          id
          title
          subtitle
          cta
          cta2
          cta3
          ctaUrl
          ctaUrl2
          ctaUrl3
          ctaTitle
          ctaSubtitle

          features {
            featureGroup {
              title
              features {
                feature {
                  name
                  link
                  newTab
                    _rawBody(resolveReferences: { maxDepth: 5 })
                  image {
                    asset {
                      url
                    }
                    alt
                  }
                 
                }
              }
            }
          }

          mainImage {
            asset {
              url
            }
            alt
          }

        }
      }
    }
   
  }
`;

const ProjectAresPage = (props) => {
  const { data, errors } = props;
 

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
 

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
 
  return (
    <ChakraProvider theme={theme}>
    <Layout>
<Hero data={data.data.edges[0].node }   />
{
      data.data.edges[0].node.features.map((group, index) => {
      
        return (
          <Features key={index} data={group.featureGroup}/>
        );
      })
}
 <Cta  data={data.data.edges[0].node }  />
    </Layout>
    </ChakraProvider>
  );
};

export default ProjectAresPage;
