import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCitiesComponent } from './right-cities.component';

describe('RightCitiesComponent', () => {
  let component: RightCitiesComponent;
  let fixture: ComponentFixture<RightCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
