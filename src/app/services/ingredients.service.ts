import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private ingredients: Ingredient[] = [];

  private savedIngredients: Ingredient[] = [
    { name: 'nutella' },
    { name: 'carciofi' },
    { name: 'cavolfiore' },
    { name: 'banana' },
    { name: 'zucchero' },
  ];

  private ingredientsSubject: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);
  ingredients$: Observable<Ingredient[]> = this.ingredientsSubject.asObservable();
  constructor() {}

  getIngredients(): Ingredient[] {
    return this.savedIngredients;
  }

  addIngredient(ingredient: Ingredient): void {
    const currentIngredients = this.ingredientsSubject.getValue();
    this.ingredientsSubject.next([...currentIngredients, ingredient]);
  }
  removeIngredient(index: number): void {
    const currentIngredients = this.ingredientsSubject.getValue();
    currentIngredients.splice(index, 1);
    this.ingredientsSubject.next(currentIngredients);
  }

  saveIngredient(ingredient: Ingredient): void {
    this.savedIngredients.push(ingredient);
  }

  getSavedIngredients(): Ingredient[] {
    return this.savedIngredients;
  }

  getIngredientsForInput(): Ingredient[] {
    return this.ingredients;
  }

  getIngredientsForResearch(): Observable<Ingredient[]> {
    // Simula una chiamata asincrona
    return of(this.ingredients);
  }
}
