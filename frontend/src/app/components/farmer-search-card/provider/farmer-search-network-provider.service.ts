import { Injectable } from '@angular/core';
import { Farmer } from 'src/app/model/farmer';
import { FarmerSearchAbstractProvider, FarmerFilter } from './farmer-search-abstract-provider';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchNetworkProviderService implements FarmerSearchAbstractProvider {

  private farmersUrl: string = `${environment.apiAddress}/farmers`;

  constructor(private http: HttpClient) { }

  searchFarmers(filter: FarmerFilter): Promise<Farmer[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('filter', filter.nameOrDocumentNumber);

    return this.http.get<Farmer[]>(this.farmersUrl, { params: params }).toPromise();
  }

}
