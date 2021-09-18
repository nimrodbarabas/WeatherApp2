import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-left-city-weather',
  templateUrl: './left-city-weather.component.html',
  styleUrls: ['./left-city-weather.component.css']
})
export class LeftCityWeatherComponent implements OnInit {

  @Input() weather !:any;
  constructor() { }

  ngOnInit(): void {
  }

}
