import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { UpdaterecipeComponent } from './updaterecipe/updaterecipe.component';
import { RecipeImagesComponent } from './recipe-images/recipe-images.component';

const appRoutes: Routes = [
   { path: '', redirectTo: 'recipes', pathMatch: 'full' },
   { path: 'recipes', component: RecipesComponent },
   { path: 'recipes/add', component: AddrecipeComponent },
   { path: 'recipes/update/:id', component: UpdaterecipeComponent},
   { path: 'recipes/upload', component: RecipeImagesComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);