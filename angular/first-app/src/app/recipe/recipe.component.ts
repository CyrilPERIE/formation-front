import { Component, Input, OnInit } from '@angular/core';
import { MOCK_RECIPES } from 'src/assets/recipes.mock';
import { Recipe } from '../model/recipe.model';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['../app.component.scss', './recipe.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
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
