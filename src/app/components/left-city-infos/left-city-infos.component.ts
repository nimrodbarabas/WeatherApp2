import { Component, OnInit , Input , OnChanges , SimpleChange} from '@angular/core';
import { Weather } from 'src/Weather';


@Component({
  selector: 'app-left-city-infos',
  templateUrl: './left-city-infos.component.html',
  styleUrls: ['./left-city-infos.component.css']
})
export class LeftCityInfosComponent implements OnInit {
  time !: string;
  @Input() weather !: any
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges (changes : SimpleChange) :void {
   
    this.time = new Date(1631967757*1000).toLocaleString() ; 
    console.log(this.time)
  }
}
