import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';

const appRoutes: Routes = [
   { path: '', redirectTo: 'recipes', pathMatch: 'full' },
   { path: 'recipes', component: RecipesComponent },
   { path: 'recipes/add', component: AddrecipeComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);