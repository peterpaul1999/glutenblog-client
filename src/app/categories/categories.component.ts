import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: [Category];
  model: Category = new Category();
  
    constructor(private categoryService: CategoryService ) { }
  
    ngOnInit() {
      this.loadAllCategories()
    }

    delete(_id: string) {
      this.categoryService.delete(_id).subscribe(() => { this.loadAllCategories() });
    }

    loadAllCategories() {
      this.categoryService.getAllCategories().subscribe(categories => {
        this.categories = categories;
      });
    }

    create() {
      this.categoryService.createCategory(this.model).subscribe(
        data => {
          //this.alertService.success('Registration successful', true);
          //this.router.navigate(['/login']);
          console.log("Category successful added")
          this.loadAllCategories()
          this.model.name = ""
          //this.router.navigate(['/categories']);
      },
      error => {
          //this.alertService.error(error);
          //this.loading = false;
          console.log(error)
      });
    }
}
