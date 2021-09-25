import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from '../companies/companies.component';
import { EditCompaniesComponent } from '../companies/edit-companies/edit-companies.component';
import { SingleCompanyComponent } from '../companies/single-company/single-company.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SingleUserComponent } from '../user/single-user/single-user.component';
import { UserComponent } from '../user/user.component';
import { AuthGuardService } from '../auth-guard.service';
import { canDeactivateGuard } from '../can-deactivate-guard.service';
import { ServerResolver } from '../companies/server-resolver.service';
import { CompanyModule } from '../companies/companies.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'companies', loadChildren: () => import('../companies/companies.module').then(m => m.CompanyModule) },
  {
    path: 'users', component: UserComponent, children: [
      { path: ':id/:name', component: SingleUserComponent }, //setting dynamic routes
    ]
  },
  { path: 'pageNotFound', component: PageNotFoundComponent, data: { mymsg: 'The page not found' } },
  { path: '**', redirectTo: '/pageNotFound' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class RoutingModule { }
