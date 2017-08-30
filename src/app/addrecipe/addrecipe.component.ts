import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent {

  //model: any = {};
  model: Recipe = new Recipe()

  constructor(private recipeService: RecipeService, private router: Router) { }

  create() {
    this.recipeService.createRecipe(this.model).subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        //this.router.navigate(['/login']);
        console.log("Recipe successful added")
        this.router.navigate(['/recipes']);
    },
    error => {
        //this.alertService.error(error);
        //this.loading = false;
        console.log(error)
    });
  }

}
