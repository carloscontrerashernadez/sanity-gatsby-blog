export default {
    name: "feature",
    type: "document",
    title: "Feature",
    fields: [
   
 
      {
        name: "image",
        type: "mainImage",
        title: "Image",
      },
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "body",
        type: "bodyPortableText",
        title: "Body",
      },

      {
        name: "link",
        type: "url",
        title: "Links to:",
      },
      {
        name: 'newTab',
        type: 'boolean',
        title: 'Opens in new tab?',
       
      }
    ],
    preview: {
      select: {
        title: "name",
        
        media: "image",
      },
    },
  };
  