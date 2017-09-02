import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
import { appConfig } from '../app.config';

@Injectable()
export class RecipeService {

  recipesUrl = appConfig.apiUrl + '/recipes/'

  constructor(private http: Http) { }
  
    getAllRecipes() {
      return this.http.get(this.recipesUrl).map(res => res.json());
    }

    getById(_id: string) {
      return this.http.get(this.recipesUrl + _id).map(res => res.json());
  }

    createRecipe(recipe: Recipe) {
      console.log("Reszept:")
      console.log(recipe)
      //this.http.head('http://localhost:4000/recipes/create')
      return this.http.post(this.recipesUrl + 'create', recipe);
    }

    updateRecipe(recipe: Recipe) {
      return this.http.put(this.recipesUrl + 'update/' + recipe._id, recipe);
    }

  delete(_id: string) {
    return this.http.delete(this.recipesUrl + 'delete/' + _id);
  }
}
