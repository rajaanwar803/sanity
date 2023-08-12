import { type SchemaTypeDefinition } from "sanity";
import pet from "./pet";
import user from "./user";
import products from "./products";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, user, products],
};
