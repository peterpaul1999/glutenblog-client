import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RecipeService } from './services/recipe.service';
import { CategoryService } from './services/category.service';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

import { routing } from './app.routing';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { NavComponent } from './nav/nav.component';
import { UpdaterecipeComponent } from './updaterecipe/updaterecipe.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { RecipeImagesComponent } from './recipe-images/recipe-images.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AddrecipeComponent,
    NavComponent,
    UpdaterecipeComponent,
    FileSelectDirective,
    RecipeImagesComponent,
    AddCategoryComponent,
    CategoriesComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    RecipeService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
