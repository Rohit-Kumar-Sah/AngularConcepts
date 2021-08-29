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
}
