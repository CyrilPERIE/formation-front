import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatCardModule } from '@angular/material/card'
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { IngredientFormComponent } from './form/ingredient-form/ingredient-form.component';
import { InstructionFormComponent } from './form/instruction-form/instruction-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    FooterComponent,
    AddRecipeFormComponent,
    IngredientFormComponent,
    InstructionFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
