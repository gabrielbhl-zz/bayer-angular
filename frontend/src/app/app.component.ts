import { Component } from '@angular/core';
import { Farmer, FARMER_INIT } from './model/farmer';
import { FarmerSearchNetworkProviderService } from './components/farmer-search-card/provider/farmer-search-network-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  farmerSelected: Farmer = FARMER_INIT;
  farmerSearchNetworkProvider: FarmerSearchNetworkProviderService

  constructor(farmerSearchNetworkProvider: FarmerSearchNetworkProviderService) {
    this.farmerSearchNetworkProvider = farmerSearchNetworkProvider;
  }

  selectFarmer(farmer: Farmer): void {
    this.farmerSelected = farmer;
  }

}
