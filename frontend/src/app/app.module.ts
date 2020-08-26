import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FarmerSearchCardComponent } from './components/farmer-search-card/farmer-search-card.component';

import { FarmerSearchNetworkProviderService } from './components/farmer-search-card/provider/farmer-search-network-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    FlexLayoutModule
  ],
  providers: [FarmerSearchNetworkProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
