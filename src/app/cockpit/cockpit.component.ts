import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  AddServer(sname, sdes) {
    console.log("from AddServer");
    console.log("sname", sname.value);
    console.log("sdes", sname.value);
  }
  AddBlueprint(sname, sdes) {
    console.log("from AddBlueprint");
    console.log("sname", sname.value);
    console.log("sdes", sname.value);
  }
}
