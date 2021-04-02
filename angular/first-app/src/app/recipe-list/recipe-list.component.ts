import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service'
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../app.component.scss','./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
   
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      elem => {
        this.recipes = elem;
      }
    );
  }

  deleteRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id != id);
  }
}
