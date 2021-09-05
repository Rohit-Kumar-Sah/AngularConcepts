import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  reload() {
    //we now are standing inside http://localhost:4200/companies and want to reload to http://localhost:4200/companies

    /*
    Below 2 , both will work because the router.navigate method is blind and doesnt know , the route we currently are on 
    therefore to it, absolute,or, relative makes no sense and so it see companies in its path and resolves to http://localhost:4200/companies
    this.router.navigate(['/companies']); //absolute path
    this.router.navigate(['companies']);  //realtive path
    */

    /*
    now we give router.navigate method eyes i.e. by passing an
    object, { relativeTo : ...... } to router.navigate method,  
    and using ActivatedRoute ( the info about the currently active route) as its value
    therefore to it, absolute,or, relative makes sense to it 
    and now below two works now
    this.router.navigate(['/companies'], { relativeTo: this.activatedRoute });
    this.router.navigate(['../companies'], { relativeTo: this.activatedRoute });

    and this fails
    this.router.navigate(['companies'], { relativeTo: this.activatedRoute });
    */

    this.router.navigate(['/companies'], { relativeTo: this.activatedRoute });
  }
}
