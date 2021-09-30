import { animate, state, style, transition, trigger } from '@angular/animations';
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
        state('highlighted', style({ backgroundColor: 'red', transform: 'translateX(100px)' })),
        /*transition('normal => highlighted', animate(200)),
        transition('highlighted => normal', animate(200)),   these 2 line replaced by below line*/
        transition('normal <=> highlighted', animate(200))
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


