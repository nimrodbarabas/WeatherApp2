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
  subscription !: Subscription;
  

  constructor(private weatherService : WeatherService) {
      this.subscription = this.weatherService.onToggle().subscribe(value => this.weatherService.getSpecificForecast(value).subscribe((res)=>this.weather = res))
   }

  ngOnInit(): void {
    this.weatherService.getBaseForecast().subscribe((res) => {
      this.weather = res
      console.log(this.weather)
    })
    
  }

}
