import { Component, OnInit ,Input } from '@angular/core';
import { Weather } from 'src/Weather';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent implements OnInit {

  @Input() main !: any
  @Input() tempMax !: number;
  @Input() tempMin !: number;
  @Input() feelsLike !: number 
 

  constructor() { }

  ngOnInit(): void {
  }

}
