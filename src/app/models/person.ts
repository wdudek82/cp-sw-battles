import { Resource } from "./resource";

export interface Person extends Resource {
  birth_year: string;
  gender: string;
  hair_color: string;
  eye_color: string;
  height: string;
  skin_color: string;
  species: string[];
  homeworld: string;
  mass: string;
  starships: string[];
  vehicles: string[];
}

