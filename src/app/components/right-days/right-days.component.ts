import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-right-days',
  templateUrl: './right-days.component.html',
  styleUrls: ['./right-days.component.css']
})
export class RightDaysComponent implements OnInit {

  @Input() main !:any

  constructor() { }

  ngOnInit(): void {
  }

}
