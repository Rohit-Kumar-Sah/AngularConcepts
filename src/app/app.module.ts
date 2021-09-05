import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'users', component: UserComponent }
]

@NgModule({
  declarations: [
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
    EditCompaniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Must Have Requirement for 2 way data Binding 
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingListService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
