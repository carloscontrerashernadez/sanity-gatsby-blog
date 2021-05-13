import { format } from "date-fns";

export default {
  name: "scenario",
  type: "document",
  title: "Scenarios",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
        name: "slug",
        type: "slug",
        title: "Slug",
        
        options: {
          source: "title",
          maxLength: 96,
        },
      },

    {
        name: "load",
        type: "string",
        title: "Load Time",
        
      },
      {
        name: "limit",
        type: "string",
        title: "Time Limit",
        
      },
      {
        name: "tasks",
        type: "string",
        title: "# of Tasks",
        
      },
      {
        name: "hints",
        type: "boolean",
        title: "Hints",
        
      },
      {
        name: "save",
        type: "boolean",
        title: "Save Session",
        
      },

      {
        name: "team",
        type: "boolean",
        title: "Team Based",
        
      },
     
     
  
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
  
 
 
    {
      name: "overview",
      type: "bodyPortableText",
      title: "Scenario Overview",
    },

    {
        name: "success",
        type: "bodyPortableText",
        title: "How to be Succesful",
      },

      {
        name: "prior",
        type: "bodyPortableText",
        title: "What you should know prior",
      },

      {
        name: "instructions",
        type: "bodyPortableText",
        title: "Scenario Instructions",
      },



  ],
 
  preview: {
    select: {
      title: "title",
      
      media: "mainImage",
    },
 
  },
};
