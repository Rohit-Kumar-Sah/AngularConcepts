import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('sf') myserverform = new EventEmitter<{ name: string, des: string, color: string }>();
  @Output('bf') myblueprintform = new EventEmitter<{ name: string, des: string, color: string }>();
  constructor() { }

  ngOnInit(): void {
  }
  AddServer(sname, sdes) {
    this.myserverform.emit({ name: sname.value, des: sdes.value, color: "red" });
    //fetched value of local reference
  }
  AddBlueprint(sname, sdes) {
    this.myserverform.emit({ name: sname.value, des: sdes.value, color: "blue" });
    //fetched value of local reference

  }
}
