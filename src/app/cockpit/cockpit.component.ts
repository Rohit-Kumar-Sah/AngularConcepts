import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('sf') myserverform = new EventEmitter<{ name: string, des: string, color: string }>();
  @Output('bf') myblueprintform = new EventEmitter<{ name: string, des: string, color: string }>();

  @ViewChild('sname') sname1;
  @ViewChild('sdes') sdes1;

  @ContentChild('locref') locref: ElementRef;
  ngAfterViewInit() {
    console.log(this.locref.nativeElement.textContent);
  }
  constructor() { }

  ngOnInit(): void {
  }
  AddServer(sname, sdes) {
    console.log("Printing via viewChild", this.sname1.nativeElement.value)
    console.log("Printing via viewChild", this.sdes1.nativeElement.value)
    this.myserverform.emit({ name: sname.value, des: sdes.value, color: "red" });
    //fetched value of local reference
  }
  AddBlueprint(sname, sdes) {
    console.log("Printing via viewChild", this.sname1.nativeElement.value)
    console.log("Printing via viewChild", this.sdes1.nativeElement.value)
    this.myserverform.emit({ name: sname.value, des: sdes.value, color: "blue" });
    //fetched value of local reference

  }
}
