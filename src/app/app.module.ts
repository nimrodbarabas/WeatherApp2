import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftContainerComponent } from './components/left-container/left-container.component';
import { RightContainerComponent } from './components/right-container/right-container.component';
import { RightHeaderComponent } from './components/right-header/right-header.component';
import { RightCitiesComponent } from './components/right-cities/right-cities.component';
import { RightDetailsComponent } from './components/right-details/right-details.component';
import { RightDetailsElementComponent } from './components/right-details-element/right-details-element.component';
import { RightDaysComponent } from './components/right-days/right-days.component';
import { LeftCityInfosComponent } from './components/left-city-infos/left-city-infos.component';
import { LeftCityWeatherComponent } from './components/left-city-weather/left-city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LeftContainerComponent,
    RightContainerComponent,
    RightHeaderComponent,
    RightCitiesComponent,
    RightDetailsComponent,
    RightDetailsElementComponent,
    RightDaysComponent,
    LeftCityInfosComponent,
    LeftCityWeatherComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
