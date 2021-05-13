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
import Case from '../components/case-study'


export const query = graphql`
  query CaseTemplateQuery($id: String!) {


 

    caseStudy: sanityCase(id: { eq: $id }) {
        id
        title
        publishedAt
        slug {
          current
        }
        heroImage {
          asset {
            url
          }
        }

        quote1
        quotee1
        quote1Image {
          asset {
            url
          }
        }

        _rawSituation
        _rawSolution
        _rawBenefits
    }
  }
`;



const CaseTemplate = (props) => {
    const { data, errors } = props;
    const caseStudy = data && data.caseStudy;
    return (
      
      <>
        {errors && <SEO title="GraphQL Error" />}
        {caseStudy && (
          <SEO
            title={caseStudy.title || "Untitled"}
            description={toPlainText(caseStudy._rawBenefits)}
           
            image={caseStudy.mainImage}
          />
        )}
  
        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
  
        {caseStudy && <Case {...caseStudy}  />}
  </>
  
      
    );
  };


export default CaseTemplate;
