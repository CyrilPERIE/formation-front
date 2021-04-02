import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['../app.component.scss', './recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  bool: boolean = false;
  textButton = 'See more';
  @Output()
  eventToParent = new EventEmitter<number>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  toggleExpand() {
    this.bool = !this.bool;
    this.bool ? this.textButton = 'See less' : this.textButton = 'See more';
  }

  delete() {
    this.recipeService.deleteRecipe(this.recipe.id);
    this.eventToParent.emit(this.recipe.id)
  }

}
