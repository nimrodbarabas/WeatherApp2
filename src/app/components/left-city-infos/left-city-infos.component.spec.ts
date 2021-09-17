import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCityInfosComponent } from './left-city-infos.component';

describe('LeftCityInfosComponent', () => {
  let component: LeftCityInfosComponent;
  let fixture: ComponentFixture<LeftCityInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCityInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCityInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
