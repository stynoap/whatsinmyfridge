import { Component } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.interface';

@Component({
  selector: 'app-add-ingredient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-ingredient.component.html',
})
export class AddIngredientComponent {
  
  ingredientInput: string = '';


  constructor(private ingredientsService: IngredientsService) {}

  saveIngredient(): void {
    if (this.ingredientInput.trim()) {
      const newIngredient: Ingredient = { name: this.ingredientInput.trim() };
      this.ingredientsService.saveIngredient(newIngredient);
      this.ingredientInput = ''
    }
  }
}
