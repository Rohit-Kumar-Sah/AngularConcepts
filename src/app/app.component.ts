import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  mysubscription: Subscription;
  myReactiveForm: FormGroup;

  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({
      infos: new FormGroup({
        naam: new FormControl(null, [Validators.required]),
        des: new FormControl(null, [Validators.required])
      }),
      myEmail: new FormControl(null, [Validators.required, Validators.email]),
      myPswd: new FormControl(null, [Validators.required])
    })


    /*
    this.mysubscription = interval(1000).subscribe(val => {
      console.log(val);  // new value emitted every second & we log in console //1,2,3...
    })
    */
    const customOB = new Observable((observer: Observer<any>) => {
      observer.next('rohit');
      // observer.error(new Error('catched our error'));  //observable completes automatically wen encountered an error
      observer.complete();
    });

    this.mysubscription = customOB.subscribe(
      data => { console.log(data); }
      , error => { console.log(error); }
      , () => { console.log("complete"); })


  }

  oursubmit() {
    console.log("reactive form", this.myReactiveForm);
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

  @ViewChild('myform') myformval: NgForm;
  mySubmit(myform: NgForm) {
    console.log("form", myform, " value ", myform.value, this.myformval);
    console.log(" value ", this.myformval);
    this.myformval.form.reset();
  }

  //setting name field
  setFormFeild() {
    //making use of @ViewChild to accessing feild 

    this.myformval.form.setValue(   //pass here object exact of signature of form
      {
        "mustFill": {
          "myMail": "rohitKumarsah",
          "myMail1": ""
        },
        "shallFill": {
          "myMail2": "",
          "myMail3": ""
        },
        "myPassword": ""
      }
    );
    //here overhead is experienced as we have to send value of other feild even if not need, and over the top these feild gets overridden to above mentioned blank values for them

  }

  //setting name field
  patchFormFeild() {
    this.myformval.form.patchValue( //pass only that object key-value that you want to patch
      {
        "mustFill": {
          "myMail": "rohit Kumar sah"
        }
      }
    );
  }
}
