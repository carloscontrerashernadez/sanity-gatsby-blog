export default {
    name: "featureReference",
    type: "object",
    title: "Feature reference",
    fields: [
      {
        name: "feature",
        type: "reference",
        to: [
          {
            type: "feature",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "feature.name",
        media: "feature.image.asset",
      },
    },
  };
  