import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private ingredients: Ingredient[] = [];

  private savedIngredients: Ingredient[] = [{name: 'nutella'}, {name: 'carciofi'}, {name: 'cavolfiore'}];

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  saveIngredient(ingredient: Ingredient): void {
    this.savedIngredients.push(ingredient);
  }

  getSavedIngredients(): Ingredient[] {
    return this.savedIngredients;
  }
}
