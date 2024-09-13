import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngredientsInputComponent } from './components/ingredients-input/ingredients-input.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IngredientsInputComponent,
    AddIngredientComponent,
    AddRecipeComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'whatsinmyfridge';
}
