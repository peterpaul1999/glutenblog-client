import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-updaterecipe',
  templateUrl: './updaterecipe.component.html',
  styleUrls: ['./updaterecipe.component.css']
})
export class UpdaterecipeComponent implements OnInit {

  id: string;
  recipe: Recipe = new Recipe()

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { 
    this.route = route;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.loadRecipe()
  }

  loadRecipe() {
    console.log("Vorher: " + this.route.snapshot.params['id'])
    this.recipeService.getById(this.id).subscribe(recipe => {
      this.recipe = recipe;
      console.log("Nachher: " + this.recipe._id)
    });   
  }

  update() {
    this.recipeService.updateRecipe(this.recipe).subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        console.log("Recipe successful updated")
        this.router.navigate(['/recipes']);
    },
    error => {
        //this.alertService.error(error);
        //this.loading = false;
        console.log(error)
    });
  }
}
