import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { UpdaterecipeComponent } from './updaterecipe/updaterecipe.component';
import { RecipeImagesComponent } from './recipe-images/recipe-images.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
   { path: '', redirectTo: 'recipes', pathMatch: 'full' },
   { path: 'recipes', component: RecipesComponent },
   { path: 'recipes/add', component: AddrecipeComponent },
   { path: 'recipes/update/:id', component: UpdaterecipeComponent},
   { path: 'recipes/upload', component: RecipeImagesComponent },
   { path: 'categories/add', component: AddCategoryComponent },
   { path: 'categories', component: CategoriesComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);