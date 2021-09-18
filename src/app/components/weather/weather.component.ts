import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { Weather } from 'src/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather !: Weather  ;

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getBaseForecast().subscribe((res) => {
      this.weather = res
      console.log(this.weather)
    })
    
  }

}
