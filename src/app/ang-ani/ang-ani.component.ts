import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-ani',
  templateUrl: './ang-ani.component.html',
  styleUrls: ['./ang-ani.component.css'],
  animations: [
    trigger(
      'myelement',
      [
        state('normal', style({ backgroundColor: 'green', transform: 'translateX(0px)' })),
        state('highlighted', style({ backgroundColor: 'red', transform: 'translateX(1000px)' })),
        /*transition('normal => highlighted', animate(200)),
        transition('highlighted => normal', animate(200)),   these 2 line replaced by below line*/
        //transition('normal <=> highlighted', animate(2000)),
        transition('normal<=>highlighted', [
          group([

            animate(1000, style({ borderRadius: '50%' })), //normal state to changing border over 1sec
            // animate(3000, style({ transform: 'translateX(500px)' })), //with changed border to moving halfway over another 1sec
            animate(1000, style({ backgroundColor: 'gray' })), //at halfway + changed border to gray background over another 1sec
            animate(1000)                                       //at halfway + changed border + gray background to highlighted state over another 1sec
          ])
        ])
      ],
    )
  ]
})
export class AngAniComponent implements OnInit {
  elestate = 'normal';
  constructor() { }

  ngOnInit(): void {

  }

  ani() {
    if (this.elestate == 'normal') {
      this.elestate = 'highlighted';
    }
    else
      this.elestate = 'normal';
  }
}


