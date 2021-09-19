import { Component, OnInit , Input , OnChanges , SimpleChange} from '@angular/core';
import { Weather } from 'src/Weather';


@Component({
  selector: 'app-left-city-infos',
  templateUrl: './left-city-infos.component.html',
  styleUrls: ['./left-city-infos.component.css']
})
export class LeftCityInfosComponent implements OnInit {

  @Input() weather !: any;
  @Input() timeZone !: string;
 
  today :number = Date.now();
  
  constructor() { }

  ngOnInit(): void {
  
  }
  
}
