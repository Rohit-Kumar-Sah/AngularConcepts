import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  myrecipe: Recipe;
  ngOnInit(): void {
    this.recipeService.recipeSeleted.subscribe((data: Recipe) => {
      //cross component Communication
      //subscribing to EventEmitter of service; PS: eventEmitter is in service, 
      //NOTE: event was emitted from Recipe-item component and not from service itself
      this.myrecipe = data;
    })
  }

}
