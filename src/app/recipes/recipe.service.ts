import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe("Test Recipe", "This is test ingredients", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg", [new Ingredient('tomato', 21), new Ingredient('lemon', 72), new Ingredient('sausages', 26)])
        , new Recipe("Test Recipe", "This is test ingredients", "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*", [new Ingredient('cheese', 92), new Ingredient('lays', 112), new Ingredient('pringles', 28)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    @Output() recipeSeleted = new EventEmitter<Recipe>();

}