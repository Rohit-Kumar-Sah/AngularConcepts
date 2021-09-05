import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit, OnDestroy {

  user: { id: number, name: string };
  hereSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /*
    //fetching route parameters //these works once only when the page url is loaded from some other page;
    //just incase url gets updated from WITHIN the page the page then this snapshot wouldnt be able to catch it and update the view
    let urlid = this.activatedRoute.snapshot.params["id"];
    let urlname = this.activatedRoute.snapshot.params["name"];
    this.user = {
      id: urlid,
      name: urlname
    }
    */

    //Reactively fetching route parameters
    this.hereSubscription = this.activatedRoute.params.subscribe((data: Params) => {
      this.user = {
        id: data.id,
        name: data.name
      }
    })
  }

  ngOnDestroy() {
    this.hereSubscription.unsubscribe(); //OPTIONAL as angular does this for us 
  }

}
