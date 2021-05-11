

export default {
    name: "projectAresPage",
    type: "document",
    title: "Project Ares Page",
     
    
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Titles should be catchy, descriptive, and not too long",
      },
      {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
          description: "Titles should be catchy, descriptive, and not too long",
        },
        {
          name: "cta",
          type: "string",
          title: "CTA 1 Text",
          description: "Button Call to Action",
        },
        {
          name: "ctaUrl",
          type: "url",
          title: "CTA 1 URL",
          description: "Button URL",
        },
        {
          name: "cta2",
          type: "string",
          title: "CTA 2 Text",
          description: "Button Call to Action",
        },
        {
          name: "ctaUrl2",
          type: "url",
          title: "CTA 2 URL",
          description: "Button URL",
        },
        

      {
        name: "mainImage",
        type: "mainImage",
        title: "Main image",
      },
     
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [
          {
            type: "featureGroupReference",
          },
        ],
      },


      {
        name: "ctaTitle",
        type: "string",
        title: "CTA Title",
        description: "Titles should be catchy, descriptive, and not too long",
      },
      {
          name: "ctaSubtitle",
          type: "string",
          title: "CTA Subtitle",
          description: "Titles should be catchy, descriptive, and not too long",
        },
        {
          name: "cta3",
          type: "string",
          title: "CTA 3 Text",
          description: "Button Call to Action",
        },
        {
          name: "ctaUrl3",
          type: "url",
          title: "CTA 3 URL",
          description: "Button URL",
        },


      
    ],
    orderings: [
      {
        name: "publishingDateAsc",
        title: "Publishing date new–>old",
        by: [
          {
            field: "publishedAt",
            direction: "asc",
          },
          {
            field: "title",
            direction: "asc",
          },
        ],
      },
      {
        name: "publishingDateDesc",
        title: "Publishing date old->new",
        by: [
          {
            field: "publishedAt",
            direction: "desc",
          },
          {
            field: "title",
            direction: "asc",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "title",
        publishedAt: "publishedAt",
   
      },
   
    },
  };
  