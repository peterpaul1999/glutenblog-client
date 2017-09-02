import { Component, OnInit } from '@angular/core';

//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
//define the constant url we would be uploading to.
const URL = 'http://localhost:4000/files/upload';
//create the component properties

import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  //model: any = {};
  model: Recipe = new Recipe()
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
     };
 }

  create() {
    this.recipeService.createRecipe(this.model).subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        //this.router.navigate(['/login']);
        console.log("Recipe successful added")
        this.router.navigate(['/recipes']);
    },
    error => {
        //this.alertService.error(error);
        //this.loading = false;
        console.log(error)
    });
  }

}
