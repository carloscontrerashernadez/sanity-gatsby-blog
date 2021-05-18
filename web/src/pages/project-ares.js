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

import {Divider} from '@chakra-ui/react'
import Hero from "../components/project-ares-hero"
import Features from '../components/feature-group'
import Cta from '../components/project-ares-cta'
import VideoHero from '../components/video-hero'
import GenericCTA from '../components/cta'
 

export const query = graphql`
 

  query ProjectAresPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }


    data: sanityProjectAresPage {
      title
      subtitle
      videoUrl
      cta
      ctaUrl
      newTab
          cta1Title
          
          cta1NewTab
      cta1Subtitle
cta1Blurb
      cta1
      ctaUrl1
          cta2Title
          cta2NewTab
      cta2Subtitle
      cta2Blurb
      cta2
      ctaUrl2
      
          cta3Title
          
          cta3NewTab
      cta3Subtitle
      cta3Blurb
      cta3
      ctaUrl3


      capabilities {
        featureGroup {
          title
          features {
            feature {
              name
              link
              newTab
              _rawBody(resolveReferences: {maxDepth: 5})
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


      benefits {
        featureGroup {
          title
          features {
            feature {
              name
              link
              newTab
              _rawBody(resolveReferences: {maxDepth: 5})
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
  
    }}
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
      <VideoHero  data={data.data }/>
      <Features data={ data.data.benefits[0].featureGroup}/>
      <GenericCTA  cta={data.data.cta1 } ctaUrl={data.data.ctaUrl1} title={data.data.cta1Title}  subtitle={data.data.cta1Subtitle} blurb={data.data.cta1Blurb} newTab={data.data.cta1NewTab}/>
      <GenericCTA   cta={data.data.cta2 } ctaUrl={data.data.ctaUrl2} title={data.data.cta2Title}  subtitle={data.data.cta2Subtitle} blurb={data.data.cta2Blurb} newTab={data.data.cta2NewTab} />
        
         <Features data={ data.data.capabilities[0].featureGroup}/>
         <GenericCTA   cta={data.data.cta3 } ctaUrl={data.data.ctaUrl3} title={data.data.cta3Title}  subtitle={data.data.cta3Subtitle} blurb={data.data.cta3Blurb} newTab={data.data.cta3NewTab}/>
      
      
    </Layout>
    </ChakraProvider>
  );
};

export default ProjectAresPage;
