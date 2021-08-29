import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is test ingredients", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
