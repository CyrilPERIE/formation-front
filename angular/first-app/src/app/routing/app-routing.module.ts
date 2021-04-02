import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { AddRecipeFormComponent } from '../add-recipe-form/add-recipe-form.component';



const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/add',
    component: AddRecipeFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { } 
