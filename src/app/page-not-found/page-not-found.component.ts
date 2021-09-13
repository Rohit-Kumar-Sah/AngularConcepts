import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  ermsg: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ermsg = this.activatedRoute.snapshot.data.mymsg;
    this.activatedRoute.data.subscribe(val => {
      this.ermsg = val.mymsg;
    })
  }

}
