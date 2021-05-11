

export default {
    name: "featureGroup",
    type: "document",
    title: "Feature Group",
     
    
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Titles should be catchy, descriptive, and not too long",
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
        
   
      },
   
    },
  };
  