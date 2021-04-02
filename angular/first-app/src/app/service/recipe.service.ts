import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private serveurUrl = 'http://10.0.1.153:8080/api/';
  private recipeUrl = this.serveurUrl + 'v1/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }
  
  postRecipe(recipe: Recipe): Observable<number> {
    return this.http.post<number>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: number): void {
    this.http.delete(`${this.recipeUrl}/${id}`).subscribe();
  }
}
