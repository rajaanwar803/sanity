import Image from "next/image";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "xg7pwq32",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
})

export default async function Home() {
  
  const pets = await client.fetch(`*[_type == "pet"]`);
  console.log(pets)
  return (
    <>
    <h1 className="font-bold">Pets</h1>
{
    pets?.map((pet:any)=>(
      <div key={pet._id}>
        <p>{pet.name}</p>
      </div>
    ))}
    </>
  );
}
