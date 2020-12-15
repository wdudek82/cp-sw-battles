import { Resource } from "./resource";

export interface Starship extends Resource {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  passengers: string;
  pilots: unknown[];
  starship_class: string;
}

export type ResourceType = "starships" | "people";
