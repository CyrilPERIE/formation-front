import { Component, Input, OnInit } from '@angular/core';
import { MOCK_RECIPES } from 'src/assets/recipes.mock';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['../app.component.scss','./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe = MOCK_RECIPES[1];
  bool: boolean = false;
  textButton = 'See more';

  constructor() { }

  ngOnInit(): void {

  }

  toggleExpand() {
    this.bool = !this.bool;
    this.bool ? this.textButton = 'See less' : this.textButton = 'See more';
  }

}
