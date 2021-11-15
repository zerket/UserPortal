import { Coordinates } from "./coordinates.model";
import { Street } from "./street.model";
import { Timezone } from "./timezone.model";

export type Location = {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
};
