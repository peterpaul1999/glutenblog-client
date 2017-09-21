import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: string;
  category: Category = new Category()

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) { 
    this.route = route;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.loadCategory()
  }

  loadCategory() {
    console.log("Vorher: " + this.route.snapshot.params['id'])
    this.categoryService.getById(this.id).subscribe(category => {
      this.category = category;
      console.log("Nachher: " + this.category._id)
    });   
  }

  update() {
    this.categoryService.update(this.category).subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        console.log("Category successful updated")
        this.router.navigate(['/categories']);
    },
    error => {
        //this.alertService.error(error);
        //this.loading = false;
        console.log(error)
    });
  }

}
