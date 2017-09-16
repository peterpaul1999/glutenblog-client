import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Category } from '../models/category';
import { appConfig } from '../app.config';

@Injectable()
export class CategoryService {

  categoriesUrl = appConfig.apiUrl + '/categories/'

  constructor(private http: Http) { }

  getAllCategories() {
    return this.http.get(this.categoriesUrl).map(res => res.json());
  }

  createCategory(category: Category) {
    console.log("Category:")
    console.log(category)
    //this.http.head('http://localhost:4000/recipes/create')
    return this.http.post(this.categoriesUrl + 'create', category);
  }

}
