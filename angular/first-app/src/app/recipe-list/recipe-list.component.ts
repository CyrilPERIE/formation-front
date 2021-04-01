import { Component, Input, OnInit } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';
import { MOCK_RECIPES } from 'src/assets/recipes.mock';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[] = MOCK_RECIPES;
  constructor() { }

  ngOnInit(): void {
  }

}
