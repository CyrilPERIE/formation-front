import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RECIPES } from 'src/assets/recipes.mock';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of (MOCK_RECIPES)
  }

  getRecipeById(id: string): Observable<Recipe> {
    return of (MOCK_RECIPES[id])
  }
}
