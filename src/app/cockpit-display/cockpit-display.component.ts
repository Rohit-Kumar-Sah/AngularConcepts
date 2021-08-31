import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit-display',
  templateUrl: './cockpit-display.component.html',
  styleUrls: ['./cockpit-display.component.css']
  // , encapsulation: ViewEncapsulation.Emulated ; this is default value that helps preserve style of a component to itself only
})
export class CockpitDisplayComponent implements OnInit {
  @Input('childPit') cpit: { name: string, des: string, color: string };
  constructor() { }

  ngOnInit(): void {
  }

}
