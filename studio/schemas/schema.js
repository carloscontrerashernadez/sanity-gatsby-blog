// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import homePage from "./documents/homePage";
import aboutPage from "./documents/about-us"
import projectAresPage from "./documents/projectAres";
import siteSettings from "./documents/siteSettings";
import feature from "./documents/feature"
import featureGroup from "./documents/feature-group"
import scenario from './documents/scenario'
import caseStudy from './documents/case-studies'
import objective from './documents/objective'
import person from './documents/person'
import landingPage from './documents/landing-pages'
// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import featureReference from "./objects/featureReference";
import featureGroupReference from "./objects/featureGroupReference";
import postReference from './objects/postReference'
 

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    homePage,
    featureGroup,
    feature,
    projectAresPage,
    landingPage,
    aboutPage,
    category,
    caseStudy,
    author,
    scenario,
    objective,
    person,

    mainImage,
     authorReference,
    featureReference,
    featureGroupReference,
    postReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
