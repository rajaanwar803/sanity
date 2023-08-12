import Image from "next/image";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "xg7pwq32",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default async function Home() {
  const products = await client.fetch(`*[_type == 'products'] {
    name, price, category,
    "picURL": picture.asset->url
  }
  `);
  console.log(products);
  return (
    <>
      <h1 className="font-bold">Products</h1>
      {products?.map((product: any) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          {product.picURL ? (
            <Image src={product.picURL} width={500} height={500} alt="pic" />
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
