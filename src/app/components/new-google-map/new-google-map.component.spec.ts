import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoogleMapComponent } from './new-google-map.component';

describe('NewGoogleMapComponent', () => {
  let component: NewGoogleMapComponent;
  let fixture: ComponentFixture<NewGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGoogleMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
