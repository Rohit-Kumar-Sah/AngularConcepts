import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularConcepts';
  disableThisButton: boolean = true;
  myInterPolation: string = "Hi this Interpolation text is coming from TS File";

  myBtnClicked() {
    alert("Event Binding in action (click Event) ")
  }

  evenBindedName: string;
  EnteredValue(event: Event) {
    this.evenBindedName = (<HTMLInputElement>event.target).value;
    //telling typeScript that we know that event.target is of type HTMLInputElement by explicit casting ,
    // else wouldnt be able to use value property (which exist on such types)
  }

  twoWayBinded: string;

  cockpitArr: { name: string, des: string, color: string }[] = [];
  myserversaved(data) {
    this.cockpitArr.push(data);
  }
  myblueprintsaved(data) {
    this.cockpitArr.push(data);
  }



}
