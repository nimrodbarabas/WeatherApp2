import { Component, OnInit ,Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-right-days',
  templateUrl: './right-days.component.html',
  styleUrls: ['./right-days.component.css']
})
export class RightDaysComponent implements OnInit {

  @Input() main !:any
  @Input() coord !: any
  subscription !: Subscription;

  constructor( private weatherService : WeatherService ) { 

  }

  ngOnInit(): void {
    this.weatherService.getDaysForecast().subscribe((res) => console.log("res" , res))
  }

}
