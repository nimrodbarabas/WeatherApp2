import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-right-cities',
  templateUrl: './right-cities.component.html',
  styleUrls: ['./right-cities.component.css']
})
export class RightCitiesComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
  }

  toggleSearch(city:string){
    
    this.weatherService.toggleSearch(city)
  }

}
