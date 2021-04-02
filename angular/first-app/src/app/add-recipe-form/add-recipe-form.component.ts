import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['../app.component.scss','./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onFormSubmit(recipeForm: NgForm): void {
    this.recipe = recipeForm.value as Recipe;
    console.log("avant d'entrer dans postRecipe()")
    console.log(this.recipe)
    this.recipeService.postRecipe( this.recipe ).subscribe(
      result => this.router.navigate([`recipes/${result}`]),
      err => console.log(err)
    )
  }
}
