import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: [Recipe];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
