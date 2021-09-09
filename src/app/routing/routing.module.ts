import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from '../companies/companies.component';
import { EditCompaniesComponent } from '../companies/edit-companies/edit-companies.component';
import { SingleCompanyComponent } from '../companies/single-company/single-company.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SingleUserComponent } from '../user/single-user/single-user.component';
import { UserComponent } from '../user/user.component';
import { AuthGuardService } from '../auth-guard.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'companies', component: CompaniesComponent, canActivateChild: [AuthGuardService], children: [
      { path: ':id', component: SingleCompanyComponent },
      { path: ':id/edit', component: EditCompaniesComponent },
    ]
  },

  {
    path: 'users', component: UserComponent, children: [
      { path: ':id/:name', component: SingleUserComponent }, //setting dynamic routes
    ]
  },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/pageNotFound' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class RoutingModule { }
