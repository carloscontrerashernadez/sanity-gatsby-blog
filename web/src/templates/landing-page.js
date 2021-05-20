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
import Landing from '../components/landing-page' 

export const query = graphql`
  query LandingTemplateQuery($id: String!) {
 
 
   
  
      landingPage: sanityLanding(id: { eq: $id }) {
        heroImage {
          asset {
            url
          }
        }

        title
        blurb
        heroCta
        heroCtaUrl
        heronewtab
        formId
        speakers {
          image {
            asset {
              url
            }
          }
          name
          title
          blurb
          link1
          link2
        }
        publishedAt
        slug {
          current
        }
        ctaImage {
          asset {
            url
          }
        }
        ctaTitle
        ctaUrl
        ctanewtab
        cta
        _rawBody
        features {
          feature {
            link
            name
            newTab
            _rawBody
            image {
              asset {
                url
              }
            }
          }
        }
        }
  
  }
`;



const LandingTemplate = (props) => {
    const { data, errors } = props;
   
    const landingPage = data && data.landingPage;
    const related = data && data.related;
    return (
      
      <>
        {errors && <SEO title="GraphQL Error" />}
        {landingPage && (
          <SEO
            title={landingPage.title || "Untitled"}
            description={toPlainText(landingPage._rawBenefits)}
           
            image={landingPage.mainImage}
          />
        )}
  
        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
  
        {landingPage && <Landing {...landingPage}  />}
  </>
  
      
    );
  };


export default LandingTemplate;
