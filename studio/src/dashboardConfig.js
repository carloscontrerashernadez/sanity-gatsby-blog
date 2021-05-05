export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6092be90f420c30f72f5d180",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zwbzyf6w",
                  apiId: "5ff1f889-3ccf-4345-8d29-b19732df8802",
                },
                {
                  buildHookId: "6092be90325b1d0c8cecc311",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tctjtadv",
                  apiId: "c7d8912f-5054-454c-baa2-e21f801be983",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/carloscontrerashernadez/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tctjtadv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
