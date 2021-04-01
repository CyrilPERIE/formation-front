import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['../app.component.scss','./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe(elem => this.recipe = elem)
  }

}
