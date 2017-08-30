import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }
  
    getAllRecipes() {
      return this.http.get('http://localhost:4000/recipes').map(res => res.json());
    }

    getById(_id: string) {
      return this.http.get('http://localhost:4000/recipes/' + _id).map(res => res.json());
  }

    createRecipe(recipe: Recipe) {
      console.log("Reszept:")
      console.log(recipe)
      //this.http.head('http://localhost:4000/recipes/create')
      return this.http.post('http://localhost:4000/recipes/create', recipe);
    }

    updateRecipe(recipe: Recipe) {
      return this.http.put('http://localhost:4000/recipes/update/' + recipe._id, recipe);
    }

  delete(_id: string) {
    return this.http.delete('http://localhost:4000/recipes/delete/' + _id);
  }
}
