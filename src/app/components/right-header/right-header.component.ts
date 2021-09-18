import { Component, OnInit ,Output , EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-right-header',
  templateUrl: './right-header.component.html',
  styleUrls: ['./right-header.component.css']
})
export class RightHeaderComponent implements OnInit {


  
  city !: string ;

  constructor(private weatherService : WeatherService ) { }

  ngOnInit(): void {
  }

  toggleSearch(){
    console.log("clicked")
    this.weatherService.toggleSearch(this.city);
  }


     
  

}
