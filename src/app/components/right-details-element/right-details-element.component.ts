import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-right-details-element',
  templateUrl: './right-details-element.component.html',
  styleUrls: ['./right-details-element.component.css']
})
export class RightDetailsElementComponent implements OnInit {

  @Input() main : any
  @Input() desc !:string
  @Input() unit !:string
  constructor() { }

  ngOnInit(): void {
    
  }

}
