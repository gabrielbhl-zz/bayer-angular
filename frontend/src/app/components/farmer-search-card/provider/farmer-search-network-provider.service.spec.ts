import { TestBed } from '@angular/core/testing';

import { FarmerSearchNetworkProviderService } from './farmer-search-network-provider.service';

describe('FarmerSearchNetworkProviderService', () => {
  let service: FarmerSearchNetworkProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSearchNetworkProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
