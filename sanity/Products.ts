

const product = {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
      {
        name: "productName",
        type: "string",
        title: "ProductName",
      },
  
      {
        title: "Slug", //ye data sanity k web documantaion se lia h slug wala
        name: "slug",
        type: "slug",
        options: {
          source: "productName", //field array mai jo name likh h wo yha likhna h
          maxLength: 200, //will be ignoreed if slugify is set
          Slugify: (input: any) =>
            input
              .toLowerCase() // lowercase ho ga
              .replace(/\s+/g, "-") // ye pateran h email wgra ad krne k liye as mai s ka mtlb space h or jha space dn gy wha se - use kre ga
              .slice(0, 200), //200 se zyda character ni use hn gy
        },
      },
      {
        name: "description",
        type: "array",
        title: "Description",
        of: [
          {
            type: "block",
          },
        ],
      },
      {
        name: "image",
        type: "array",
        title: "Image",
        of: [
          {
            type: "image",
            fields: [
              {
                name: "alt",
                type: "text",
                title: "Alternative text",
              },
            ],
          },
        ],
      },
      {
        name: "productTypes",
        type: "array",
        title: "ProductType",
        of: [{ type: "string" }],
      },
      {
        name: "price",
        type: "number",
        title: "Price",
      },
      {
        name: "size",
        type: "array",
        title: "Sizes",
        of: [{ type: "string" }],
      },
      {
        name: "quantity",
        type: "number",
        title: "Quantity",
      },
    ],
  };
  
  export default product
  
  