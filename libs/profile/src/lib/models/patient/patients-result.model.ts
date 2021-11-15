import { Patient } from "./patient.model";
import { Info } from "./info.model";

export type PatientsResult = {
    results: Patient[];
    info: Info;
};
