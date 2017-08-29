import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RecipeService } from './services/recipe.service';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

import { routing } from './app.routing';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AddrecipeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
