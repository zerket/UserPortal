import { Dob } from "./dob.model";
import { Id } from "./id.model";
import { Location } from "./location.model";
import { Login } from "./login.model";
import { Name } from "./name.model";
import { Picture } from "./picture.model";
import { Registered } from "./registered.model";

export type Patient = {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
};

