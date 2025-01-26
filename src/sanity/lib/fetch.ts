// fetch.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rviymu89",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

export async function getServerSideProps() {
  const query = `*[_type == "products"]`;
  const products = await client.fetch(query);

  console.log("Fetched products:", products); // Log fetched data

  return { props: { products } };
}
