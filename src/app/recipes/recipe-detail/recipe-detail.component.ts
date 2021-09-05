import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private renderer: Renderer2, private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  @ViewChild('openme') openme: ElementRef;
  disB = false;
  dis = "block";
  meclick() {
    this.disB = !this.disB;
    this.dis = this.disB ? "block" : "none";
    this.renderer.setStyle(this.openme.nativeElement, 'display', this.dis);

  }

  addit(ing) {
    console.log("ing", this.slService.getIngredients);
    this.recipe.ingredients.forEach((element: Ingredient) => {

      this.slService.oningredientAdded(element);
    });


  }
}
