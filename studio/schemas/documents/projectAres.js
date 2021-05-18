

export default {
    name: "projectAresPage",
    type: "document",
    title: "Project Ares Page",
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
        name: "cta1",
        title: "CTA 1",
        options: {
          collapsible: true,  
          collapsed: true, 
        },
      },
      {
        name: "cta2",
        title: "CTA 2",
        options: {
          collapsible: true,  
          collapsed: true, 
        },
      },
      {
        name: "cta3",
        title: "CTA 3",
        options: {
          collapsible: true, 
          collapsed: true, 
        },
      },
    ],
    
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Titles should be catchy, descriptive, and not too long",
        fieldset: "hero",
      },
      {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
          description: "Titles should be catchy, descriptive, and not too long",
          fieldset: "hero",
        },

        {
          name: "videoUrl",
          type: "url",
          title: "Video URL",
          description: "Vimeo video URL",
          fieldset: "hero",
        },
        {
          name: "cta",
          type: "string",
          title: "Hero CTA Text",
          description: "Button Call to Action",
          fieldset: "hero",
        },
        {
          name: "ctaUrl",
          type: "url",
          title: "Hero CTA URL",
          description: "Button URL",
          fieldset: "hero",
        },
        {
          name: 'newTab',
          type: 'boolean',
          title: 'Opens in new tab?',
          fieldset: "hero",
        },



     
        {
          name: "benefits",
          title: "Benefits",
          type: "array",
          of: [
            {
              type: "featureGroupReference",
            },
          ],
        },

        {
          name: "cta1Title",
          type: "string",
          title: "Big Title",
          fieldset: "cta1", 
        },
        {
          name: "cta1Subtitle",
          type: "string",
          title: "Subtitle",
          fieldset: "cta1",
          
        },
        
        {
          name: "cta1Blurb",
          type: "string",
          title: "Blurb",
          fieldset: "cta1", 
        },
        {
          name: "cta1",
          type: "string",
          title: "CTA",
          fieldset: "cta1",
          
        },
        {
          name: "ctaUrl1",
          type: "url",
          title: "Button URL",
          fieldset: "cta1",
          
        },
        {
          name: 'cta1NewTab',
          type: 'boolean',
          title: 'Opens in new tab?',
          fieldset: "cta1",
        },



        {
          name: "cta2Title",
          type: "string",
          title: "Big Title",
          fieldset: "cta2", 
        },
        {
          name: "cta2Subtitle",
          type: "string",
          title: "Subtitle",
          fieldset: "cta2",
          
        },

        {
          name: "cta2Blurb",
          type: "string",
          title: "Blurb",
          fieldset: "cta2", 
        },


        {
          name: "cta2",
          type: "string",
          title: "CTA",
          fieldset: "cta2",
          
        },
        {
          name: "ctaUrl2",
          type: "url",
          title: "Button URL",
          fieldset: "cta2",
          
        },
        {
          name: 'cta2NewTab',
          type: 'boolean',
          title: 'Opens in new tab?',
          fieldset: "cta2",
        },




        {
          name: "capabilities",
          title: "Capabilities",
          type: "array",
          of: [
            {
              type: "featureGroupReference",
            },
          ],
        },

       
        


        {
          name: "cta3Title",
          type: "string",
          title: "Big Title",
          fieldset: "cta3", 
        },
        {
          name: "cta3Subtitle",
          type: "string",
          title: "Subtitle",
          fieldset: "cta3",
          
        },
        {
          name: "cta3Blurb",
          type: "string",
          title: "Blurb",
          fieldset: "cta3", 
        },
        {
          name: "cta3",
          type: "string",
          title: "CTA",
          fieldset: "cta3",
          
        },
        {
          name: "ctaUrl3",
          type: "url",
          title: "Button URL",
          fieldset: "cta3",
          
        },
        {
          name: 'cta3NewTab',
          type: 'boolean',
          title: 'Opens in new tab?',
          fieldset: "cta3",
        },


 

      
    ],
 
    preview: {
      select: {
        title: "title",
        
   
      },
   
    },
  };
  