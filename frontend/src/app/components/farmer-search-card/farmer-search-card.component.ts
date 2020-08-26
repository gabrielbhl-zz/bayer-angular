import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from './provider/farmer-search-abstract-provider';
import { Farmer, FARMER_INIT } from 'src/app/model/farmer';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  farmerSelected: Farmer;
  farmers: Farmer[];

  @Input()
  farmerSearchAbstractProvider: FarmerSearchAbstractProvider;

  @Output()
  onPartnerSelectedEvent = new EventEmitter();

  ngOnInit(): void {
    this.farmerSelected = FARMER_INIT;
  }

  searchFarmers(text: string): void {

    if (!text) {
      this.farmers = null;
      this.farmerSelected = FARMER_INIT;
      this.setSelectedFarmer(this.farmerSelected);
    } else {

      this.farmerSearchAbstractProvider.searchFarmers({
        nameOrDocumentNumber: text
      }).then((farmers: Farmer[]) => {
        this.farmers = this._handleSearchResult(farmers);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  _handleSearchResult(farmers: Farmer[]) {
    return this.farmerSelected?.id ? farmers.filter(farmer => farmer.id != this.farmerSelected.id) : farmers;
  }

  setSelectedFarmer(farmer: Farmer): void {

    if (this.farmerSelected?.id != farmer.id) {
      this.farmerSelected = farmer;
      this.onPartnerSelectedEvent.emit(farmer);

      this.farmers = this._handleSearchResult(this.farmers);
    }

  }

  getFarmetAddress(): String {
    var address: String = '';

    if (this.farmerSelected?.address?.street) {
      address += this.farmerSelected.address.street + ' ';
    }

    if (this.farmerSelected?.address?.address) {
      address += this.farmerSelected.address.address + ' ';
    }

    if (this.farmerSelected?.address?.state) {
      address += this.farmerSelected.address.state + ' ';
    }

    if (this.farmerSelected?.address?.country) {
      address += this.farmerSelected.address.country + ' ';
    }

    return address ? address.substring(0, address.length - 1) : '';
  }

}
