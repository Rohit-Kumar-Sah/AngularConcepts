import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth-guard.service";
import { canDeactivateGuard } from "../can-deactivate-guard.service";
import { CompaniesComponent } from "./companies.component";
import { EditCompaniesComponent } from "./edit-companies/edit-companies.component";
import { ServerResolver } from "./server-resolver.service";
import { SingleCompanyComponent } from "./single-company/single-company.component";

const routes: Routes = [
    {
        path: 'companies', component: CompaniesComponent, canActivateChild: [AuthGuardService], children: [
            { path: ':id', component: SingleCompanyComponent, resolve: { askedServer: ServerResolver } },
            { path: ':id/edit', component: EditCompaniesComponent, canDeactivate: [canDeactivateGuard] },
        ]
    }
]
@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CompanyModule {

}