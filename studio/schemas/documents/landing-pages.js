import { format } from "date-fns";

export default {
  name: "landing",
  type: "document",
  title: "Landig Pages",
  fieldsets: [
    {
      name: "hero",
      title: "Hero",
      options: {
        collapsible: true, 
        collapsed: true, 
      },
    },
    {
        name: "cta",
        title: "CTA Section",
        options: {
          collapsible: true, 
          collapsed: true, 
        },
      },
   

  ],
  fields: [
        
    {
        name: "heroImage",
        type: "mainImage",
        title: "Image",
        fieldset: "hero",
      },
    {
      name: "title",
      type: "string",
      title: "Hero Title",
     
      fieldset: "hero",
    },
    {
        name: "blurb",
        type: "string",
        title: "Hero Blurb",
       
        fieldset: "hero",
      },
      {
        name: "heroCta",
        type: "string",
        title: "Hero CTA",
       
        fieldset: "hero",
      },
      {
        name: "heroCtaUrl",
        type: "url",
        title: "Link:",
       
        fieldset: "hero",
      },
      {
        name: "heronewtab",
        type: "boolean",
        title: "Opens in new tab?",
       
        fieldset: "hero",
      },
      {
        name: "formId",
        type: "string",
        title: "Act-On form ID",
       
        fieldset: "hero",
      },




      {
        name: "speakers",
        type: "array",
        title: "Speakers",
        of: [
          {
            type: "reference",
            to: {
              type: "person",
            },
          },
        ],
      },
  

    
    {
        name: "publishedAt",
        type: "datetime",
        title: "Published at",
        description: "This can be used to schedule post for publishing",
        
      },
          {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    
    {
        name: "ctaImage",
        type: "mainImage",
        title: "Image",
        fieldset: "cta",
      },

    {
      name: "ctaTitle",
      type: "string",
      title: "Title",
      fieldset: "cta",
    },
    {
        name: "body",
        type: "bodyPortableText",
        title: "Text",
        fieldset: "cta",
      },
      {
        name: "cta",
        type: "string",
        title: "CTA",
        fieldset: "cta",
      },
      {
        name: "ctaUrl",
        type: "url",
        title: "Link:",
       
        fieldset: "cta",
      },
      {
        name: "ctanewtab",
        type: "boolean",
        title: "Opens in new tab?",
       
        fieldset: "cta",
      },
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [
          {
            type: "featureReference",
          },
        ],
      },




  ],

  preview: {
    select: {
      title: "title",

      media: "mainImage",
    },
  },
};
