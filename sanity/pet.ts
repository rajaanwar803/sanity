export default {
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "color",
      type: "string",
      title: "Color",
    },
    {
      name: "age",
      type: "number",
      title: "Age",
    },
    {
      title: "Names",
      name: "names",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Has the movie been released?",
      name: "released",
      type: "boolean",
    },
    {
      title: `Person in another dataset"`,
      name: "personReference",
      type: "crossDatasetReference",
      dataset: "production",
      to: [
        {
          type: "person",
          preview: {
            select: {
              title: "name",
              media: "image",
            },
          },
        },
      ],
    },
    {
      title: "Release date",
      name: "releaseDate",
      type: "date",
    },
    {
      title: "Launch Scheduled At",
      name: "launchAt",
      type: "datetime",
    },
    {
      title: "Launchpad Location",
      name: "location",
      type: "geopoint",
    },
    {
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: false, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Manuscript",
      name: "manuscript",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    },
  ],
};
