export default {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Kids", value: "kids" },
        ],
      },
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
};
