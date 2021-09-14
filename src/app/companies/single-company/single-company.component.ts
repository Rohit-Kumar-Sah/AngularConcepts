import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.css']
})
export class SingleCompanyComponent implements OnInit {

  server: { id: number, name: string, status: string };
  hereSubscription: any;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
      // this.server = this.serversService.getServer(+(data.id)); //commented as we use resolver now
    })

    this.server = this.activatedRoute.snapshot.data['askedServer'];
    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data['askedServer'];
    }
    );

  }

  editServer() {
    this.router.navigate(["/companies", this.server.id, "edit"], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}
