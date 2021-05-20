const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}



async function createScenarioPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityScenario  {
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
    }
  `);

  if (result.errors) throw result.errors;

  const scenarioEdges = (result.data.allSanityScenario || {}).edges || [];

  scenarioEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const {id,slug = {},  } = edge.node;
      
      const path = `/scenarios/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/scenario.js"),
        context: { id },
      });
    });
}







async function createCasePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCase  {
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
    }
  `);

  if (result.errors) throw result.errors;

  const caseEdges = (result.data.allSanityCase || {}).edges || [];

  caseEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const {id,slug = {},  } = edge.node;
      
      const path = `/case-study/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/case-study.js"),
        context: { id },
      });
    });
}



async function createLandingPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLanding  {
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
    }
  `);

  if (result.errors) throw result.errors;

  const landingEdges = (result.data.allSanityLanding || {}).edges || [];

  landingEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const {id,slug = {},  } = edge.node;
      
      const path = `/landing-page/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/landing-page.js"),
        context: { id },
      });
    });
}




exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createScenarioPages(graphql, actions);
  await createCasePages(graphql, actions);
  await createLandingPages(graphql, actions);
};
