import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit-display',
  templateUrl: './cockpit-display.component.html',
  styleUrls: ['./cockpit-display.component.css']
})
export class CockpitDisplayComponent implements OnInit {
  @Input('childPit') cpit: { name: string, des: string };
  constructor() { }

  ngOnInit(): void {
  }

}
