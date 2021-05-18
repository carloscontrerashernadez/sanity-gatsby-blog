export default {
    name: "person",
    type: "document",
    title: "Person",
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
        name: "title",
        type: "string",
        title: "Title",
      },

      {
        name: "blurb",
        type: "string",
        title: "Blurb",
      },
   

      {
        name: "link1",
        type: "url",
        title: "Social Link 1:",
      },
      {
        name: "link2",
        type: "url",
        title: "Social Link 2:",
      },
 
    ],
    preview: {
      select: {
        title: "name",
        
        media: "image",
      },
    },
  };
  