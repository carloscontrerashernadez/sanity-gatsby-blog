export default {
    name: "featureGroupReference",
    type: "object",
    title: "Feature group reference",
    fields: [
      {
        name: "featureGroup",
        type: "reference",
        to: [
          {
            type: "featureGroup",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "featureGroup.title",
        
      },
    },
  };
  