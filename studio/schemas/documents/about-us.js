

export default {
    name: "aboutUsPage",
    type: "document",
    title: "About Us Page",
     
    
    fields: [
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
            name: "team",
            type: "array",
            title: "Team Members",
            of: [
              {
                type: "reference",
                to: {
                  type: "person",
                },
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
  