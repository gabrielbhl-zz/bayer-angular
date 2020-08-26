import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchCardComponent } from './farmer-search-card.component';

describe('FarmerSearchCardComponent', () => {
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
