import { format } from "date-fns";

export default {
  name: "case",
  type: "document",
  title: "Case Studies",
  fieldsets: [
    {
      name: "hero",
      title: "Hero",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
        name: "quote1Set",
        title: "Quote 1",
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
        },
      },
      {
        name: "quote2Set",
        title: "Quote 2",
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
        },
      },
      {
        name: "iconsSet",
        title: "Icon Blurbs",
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
        },
      },
      {
        name: "quote3Set",
        title: "Quote 3",
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
        },
      },

      {
        name: "dividerSet",
        title: "Divider Banner",
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
        },
      },

  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Hero Title",
      description: "Titles should be catchy, descriptive, and not too long",
      fieldset: "hero",
    },


 
    {
      name: "heroImage",
      type: "mainImage",
      title: "Hero image",
      fieldset: "hero",
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
      name: "quote1",
      type: "string",
      title: "Quote 1",
      fieldset: "quote1Set",
    },
    {
      name: "quotee1",
      type: "string",
      title: "Quotee 1",
      fieldset: "quote1Set",
    },

    {
      name: "quote1Image",
      type: "mainImage",
      title: "Quote 1 image",
      fieldset: "quote1Set",
    },
    {
      name: "situation",
      type: "bodyPortableText",
      title: "Situation",
    },
    {
      name: "solution",
      type: "bodyPortableText",
      title: "Solution",
    },
    {
      name: "quote2",
      type: "string",
      title: "Quote 2",
      fieldset: "quote2Set",
    },
    {
      name: "quotee2",
      type: "string",
      title: "Quotee 2",
      fieldset: "quote2Set",
    },

    {
      name: "quote2Image",
      type: "mainImage",
      title: "Quote 2 Image",
      fieldset: "quote2Set",
    },

    {
      name: "quote2Logo",
      type: "mainImage",
      title: "Quote 2 Logo",
      fieldset: "quote2Set",
    },

    {
        name: "iconsTitle",
        type: "string",
        title: "Icon Blurbs Title",
        description: "Titles should be catchy, descriptive, and not too long",
        fieldset: "iconsSet",
      },

    {
        name: "icon1",
        type: "mainImage",
        title: "Icon 1",
        fieldset: "iconsSet",
      },
    {
      name: "iconBlurb1",
      type: "bodyPortableText",
      title: "Icon Blurb 1",
      fieldset: "iconsSet",
    },



    {
        name: "icon2",
        type: "mainImage",
        title: "Icon 2",
        fieldset: "iconsSet",
      },
    {
      name: "iconBlurb2",
      type: "bodyPortableText",
      title: "Icon Blurb 2",
      fieldset: "iconsSet",
    },



    {
      name: "blurb1",
      type: "bodyPortableText",
      title: "Blurb 1",
    },

    {
      name: "quote3",
      type: "string",
      title: "Quote 3",
      fieldset: "quote3Set",
    },
    {
      name: "quotee3",
      type: "string",
      title: "Quotee 3",
      
      fieldset: "quote3Set",
    },
    {
      name: "benefits",
      type: "bodyPortableText",
      title: "Benefits",
    },

    {
      name: "benefitsImage",
      type: "mainImage",
      title: "Benefits Image",
    },

    {
      name: "divider",
      type: "boolean",
      title: "Divider",
      fieldset: "dividerSet",
    },

    {
      name: "dividerLink",
      type: "url",
      title: "Divider Link",
      fieldset: "dividerSet",
    },
    {
      name: "newTab",
      type: "boolean",
      title: "Opens in new tab?",
      fieldset: "dividerSet",
    },

    {
      name: "blurb2",
      type: "bodyPortableText",
      title: "Blurb 2",
    },

    {
      name: "related",
      type: "array",
      title: "Related Posts",
      of: [
        {
          type: "reference",
          to: {
            type: "post",
          },
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
