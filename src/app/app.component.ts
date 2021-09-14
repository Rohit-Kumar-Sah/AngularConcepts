import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  mysubscription: Subscription;

  ngOnInit(): void {
    /*
    this.mysubscription = interval(1000).subscribe(val => {
      console.log(val);  // new value emitted every second & we log in console //1,2,3...
    })
    */
    const customOB = new Observable((observer: Observer<any>) => {
      observer.next('rohit');
      //observer.error('catched our error');
      //observer.complete();
    });

    this.mysubscription = customOB.subscribe(data => {
      console.log(data);
    })


  }
  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }
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

  loadedFeature: string = 'recipe';
  onNavigate(feature) {
    this.loadedFeature = feature;
  }

}
