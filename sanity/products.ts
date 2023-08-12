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
      initialValue: {
        title: "Male",
      },
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
      type: "string",
      title: "Picture",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
};
