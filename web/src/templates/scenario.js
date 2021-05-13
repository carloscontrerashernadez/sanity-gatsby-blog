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

import { toPlainText } from "../lib/helpers";
import { ChakraProvider } from "@chakra-ui/react"
import IndexHero from '../components/index-hero'
import IndexTestimonials from "../components/index-testimonials"

import About from '../components/about-us'
import {theme} from '../components/theme'

import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import Hero from "../components/project-ares-hero"
import Features from '../components/feature-group'
import Cta from '../components/project-ares-cta'
import Accordion from  '../components/accordion'
import Drawer from '../components/drawer'
import Scenario from '../components/scenario'


export const query = graphql`
  query ScenarioTemplateQuery($id: String!) {



    scenarios: allSanityScenario {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }

    scenario: sanityScenario(id: { eq: $id }) {
        title
        slug {
          current
        }
        load
        limit
        tasks
        hints
        save
        team
        mainImage {
            ...SanityImage
          asset {
            url
          }
        }
        _rawOverview
        _rawSuccess
        _rawPrior
        _rawInstructions
    }
  }
`;



const ScenarioTemplate = (props) => {
    const { data, errors } = props;
    const scenario = data && data.scenario;
    return (
      
      <>
        {errors && <SEO title="GraphQL Error" />}
        {scenario && (
          <SEO
            title={scenario.title || "Untitled"}
            description={toPlainText(scenario._rawOverview)}
            image={scenario.mainImage}
          />
        )}
  
        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
  
        {scenario && <Scenario {...scenario} scenarios={data.scenarios}/>}
  </>
  
      
    );
  };


export default ScenarioTemplate;
