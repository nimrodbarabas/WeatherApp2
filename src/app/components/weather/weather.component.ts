import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { Weather } from 'src/Weather';
import { toHtml } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather !: Weather  ;
  subscription !: Subscription;
  timeZone !: number;
  temperature !: number;
  

  constructor(private weatherService : WeatherService) {
      this.subscription = this.weatherService.onToggle()
      .subscribe(value => this.weatherService.getSpecificForecast(value)
      .subscribe((res)=>{
      Object.entries(res.main).map(el => {if(el[0]==="temp") this.temperature=Math.round(el[1])})
      this.weather = res
    }))
   }

  ngOnInit(): void {
    this.weatherService.getBaseForecast().subscribe((res) => {
      Object.entries(res.main).map(el => {if(el[0]==="temp") this.temperature=Math.round(el[1])})
      
      this.weather = res
      
      this.timeZone = res.dt
      console.log(this.weather)
    })
    
  }

}
