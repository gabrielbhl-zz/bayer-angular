import { Document } from './document';
import { Address } from './address';

export const FARMER_INIT = {
    id: "",
    document: {
        documentNumber: "",
        documentType: ""
    },
    name: "",
    address: {
        street: "",
        address: "",
        state: "",
        country: ""
    }
};

export interface Farmer {

    id: string;
    document: Document;
    name: string;
    address: Address;
}