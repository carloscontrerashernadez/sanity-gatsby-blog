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
 
import {theme} from '../components/theme'

import { Flex, Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import Objectives from '../components/objectives'

export const query = graphql`
 

  query SupportPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    allSanityObjective {
        nodes {
          sanityId
          description
          name
          _rawBody
        }
      }
   
  }
`;

const SupportPage = (props) => {
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
    <Flex justify='center'>
<Box w="960px" mt='2em'>
 <Objectives data={data.allSanityObjective.nodes} scenario='BR1'/></Box></Flex>
    </Layout>
    </ChakraProvider>
  );
};

export default SupportPage;
