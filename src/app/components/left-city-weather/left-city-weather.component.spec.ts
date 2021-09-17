import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCityWeatherComponent } from './left-city-weather.component';

describe('LeftCityWeatherComponent', () => {
  let component: LeftCityWeatherComponent;
  let fixture: ComponentFixture<LeftCityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCityWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
