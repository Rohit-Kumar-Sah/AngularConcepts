import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CockpitDisplayComponent } from './cockpit-display/cockpit-display.component';
import { basicHighlightDirective } from './shared/basicHighter.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CompaniesComponent } from './companies/companies.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { SingleCompanyComponent } from './companies/single-company/single-company.component';
import { EditCompaniesComponent } from './companies/edit-companies/edit-companies.component';
import { ServersService } from './companies/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing/routing.module';
import { ShortenerPipe } from './shortener.pipe';
import { HelperDirective } from './shared/helperdirective.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngAniComponent } from './ang-ani/ang-ani.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CompanyModule } from './companies/companies.module';// remove its import too for lazily loading



@NgModule({
  declarations: [
    AngAniComponent,
    AppComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    CockpitComponent,
    CockpitDisplayComponent,
    basicHighlightDirective,
    DropdownDirective,
    HomeComponent,
    UserComponent,
    CompaniesComponent,
    SingleUserComponent,
    SingleCompanyComponent,
    EditCompaniesComponent,
    PageNotFoundComponent,
    ShortenerPipe,
    HelperDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,  //Must Have Requirement for 2 way data Binding ,
    //commented module below as we now are lazily loading it , so shouldnt import in ad=pp module
    //CompanyModule, //import all feature routing configuration before root app routing configurations file
    RoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [ShoppingListService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
