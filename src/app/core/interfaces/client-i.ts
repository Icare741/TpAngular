import { FiabiliteClient } from '../enums/fiabilite-client';
/** * "id": 2, "nom":  "Wayne", "prenom":  "Bruce", "adresse": "Gotham", "societe": "Batmob" */
export interface ClientI {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    societe: string;
    totalCaHT: number;
    tauxImposition: number;
    fiabilite: FiabiliteClient;
}