import { Component, OnInit , Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/Weather';
import { WeatherComponent } from '../weather/weather.component';
import  {Subscription} from "rxjs";

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent implements OnInit {

  feelsLike !: number ;
  humidity !: number;
  pressure !: number;
  tempMax !: number;
  tempMin !: number;
  main !: object;
  subscription !: Subscription;
  
  constructor(private weatherService : WeatherService) { 
    this.subscription = this.weatherService.onToggle().subscribe(value => this.weatherService.getSpecificForecast(value).subscribe((res)=>this.main = res.main))
  }

  ngOnInit(): void {

    this.weatherService.getBaseForecast().subscribe((res) => {
      this.main = res.main
    })
  }
  
}
