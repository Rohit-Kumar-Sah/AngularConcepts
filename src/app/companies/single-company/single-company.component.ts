import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.css']
})
export class SingleCompanyComponent implements OnInit {

  server: { id: number, name: string, status: string };
  hereSubscription: any;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.server = this.serversService.getServer(1);

    /*
    //fetching route parameters //these works once only when the page url is loaded from some other page;
    //just incase url gets updated from WITHIN the page the page then this snapshot wouldnt be able to catch it and update the view
    let urlid = this.activatedRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(+(urlid));
    */

    //Reactively fetching route parameters
    this.hereSubscription = this.activatedRoute.params.subscribe((data: Params) => {
      this.server = this.serversService.getServer(+(data.id));
    })
  }

}
