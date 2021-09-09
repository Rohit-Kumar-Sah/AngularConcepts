import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  loadCompanies() {
    //imagine we gotta do some complex work that then decides of navigation
    this.router.navigate(['companies']);
  }
  logout() {
    this.authService.logout();
  }
  login() {
    this.authService.login();

  }
}
