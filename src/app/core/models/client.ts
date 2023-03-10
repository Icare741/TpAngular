import { FiabiliteClient } from "../enums/fiabilite-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI { 
    adresse = '';
    id = 0;
    nom= '';
    prenom = '';
    societe = '';
    totalCaHT = 20;
    tauxImposition = 3;
    fiabilite = FiabiliteClient.CLASSIQUE;

    constructor(obj?: Partial<Client>) {
        Object.assign(this, obj);
    }


}