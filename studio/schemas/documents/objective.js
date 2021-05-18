export default {
    name: "objective",
    type: "document",
    title: "Objective",
    fields: [
   
  
      {
        name: "name",
        type: "string",
        title: "Objective Name",
      },
      {
        name: "sanityId",
        type: "string",
        title: "Objective ID",
      },
      {
        name: "description",
        type: "string",
        title: "Description",
      },
      {
        name: "body",
        type: "bodyPortableText",
        title: "Body",
      },

 
    ],
    preview: {
      select: {
        title: "name",
        subtitle: 'id'
        
      },
    },
  };
  