import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredients: Ingredient[] = [new Ingredient('peperoni', 3), new Ingredient('tomato', 3)];

    @Output() ingredientsUpdated = new EventEmitter<Ingredient[]>();
    getIngredients() {
        return this.ingredients.slice();
    }
    oningredientAdded(myIngredient: Ingredient) {
        this.ingredients.push(myIngredient);
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }
}