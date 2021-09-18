import { Component, OnInit , Input ,OnChanges, SimpleChange} from '@angular/core';
import { Weather } from 'src/Weather';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent implements OnInit {

 @Input() weather !:any
  roundedCelsius : number = 0

  
  constructor() { }

  ngOnInit(): void {
    }

  
 

  

}
