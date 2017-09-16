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
  
    constructor(private categoryService: CategoryService ) { }
  
    ngOnInit() {
      this.loadAllCategories()
    }
/*  
    deleteRecipe(_id: string) {
      this.categoryService.delete(_id).subscribe(() => { this.loadAllCategories() });
    }
*/  
    loadAllCategories() {
      this.categoryService.getAllCategories().subscribe(categories => {
        this.categories = categories;
      });
    }
}
