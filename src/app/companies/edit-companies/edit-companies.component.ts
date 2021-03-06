import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ourDeactivateInterface } from 'src/app/can-deactivate-guard.service';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.css']
})
export class EditCompaniesComponent implements OnInit, ourDeactivateInterface {

  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ourDeactivateFunction(): boolean | Observable<boolean> | Promise<boolean> {
    if ((this.serverName != this.server.name ||
      this.serverStatus != this.server.status) && this.changesSaved == false) {
      alert("Do u wanna discard the chamges");
      return false;

    }
    else return true;
  }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    /*
    //fetching route queryParams //these works once only when the page url is loaded from some other page;
    //just incase url gets updated from WITHIN the page the page then this snapshot wouldnt be able to catch it and update the view
    let urlid = this.activatedRoute.snapshot.queryParams["id"];
    let urlname = this.activatedRoute.snapshot.queryParams["name"];
    this.user = {
      id: urlid,
      name: urlname
    }
    

    //Reactively fetching route parameters
   this.activatedRoute.queryParams.subscribe((data) => {
      
    })
    */

    /*
    //fetching route fragment //these works once only when the page url is loaded from some other page;
    //just incase url gets updated from WITHIN the page the page then this snapshot wouldnt be able to catch it and update the view
    
     let allowEdit = this.activatedRoute.snapshot.fragment;
    

    //Reactively fetching route parameters
   this.activatedRoute.fragment.subscribe((data) => {
      
    })
    */


  }
  changesSaved = false;
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }


}
