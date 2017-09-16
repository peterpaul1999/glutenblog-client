import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model: Category = new Category()
  
  constructor(private categoriesService: CategoryService, private router: Router) {}

  create() {
    this.categoriesService.createCategory(this.model).subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        //this.router.navigate(['/login']);
        console.log("Category successful added")
        this.router.navigate(['/categories']);
    },
    error => {
        //this.alertService.error(error);
        //this.loading = false;
        console.log(error)
    });
  }

}
