import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredients-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingredients-input.component.html'
})
export class IngredientsInputComponent {
  ingredient: string = '';

  constructor(private ingredientSevice:IngredientsService){}

  addIngredient() {
    if (this.ingredient) {
      this.ingredientSevice.addIngredient(this.ingredient);
      this.ingredient = '';
    }
  }
  get ingredients(): string[]{
    return this.ingredientSevice.getIngredients();
  }
  removeIngredient(index: number) {
    this.ingredientSevice.removeIngredient(index) // Rimuovi 1 elemento dalla posizione 'index'
  }
}
