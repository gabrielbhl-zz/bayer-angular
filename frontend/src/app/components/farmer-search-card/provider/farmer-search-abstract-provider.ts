import { Farmer } from 'src/app/model/farmer';

export interface FarmerFilter {
    nameOrDocumentNumber: string;
}

export declare abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(filter: FarmerFilter): Promise<Farmer[]>;
}