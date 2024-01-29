import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListingComponent } from './clients-listing.component';

describe('ClientsListingComponent', () => {
  let component: ClientsListingComponent;
  let fixture: ComponentFixture<ClientsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsListingComponent]
    });
    fixture = TestBed.createComponent(ClientsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
