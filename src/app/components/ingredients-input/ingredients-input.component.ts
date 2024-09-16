import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../models/ingredient.interface';
import { TagComponent } from '../../ui/tag/tag.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-input',
  standalone: true,
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './ingredients-input.component.html',
})
export class IngredientsInputComponent implements OnInit, OnDestroy {
  filteredIngredients: Ingredient[] = [];
  ingredientInput: string = '';
  ingredients$: Observable<Ingredient[]>; // Observable per gli ingredienti
  private subscriptions = new Subscription();

  constructor(private ingredientService: IngredientsService) {
    this.ingredients$ = this.ingredientService.ingredients$; // Usa l'Observable dal servizio
  }
  get ingredients(): Ingredient[] {
    return this.ingredientService.getSavedIngredients();
  }
  ngOnInit(): void {
    // Sottoscrivi per aggiornare filteredIngredients quando ingredients$ emette nuovi valori
   this.setFilteredIngredients(this.ingredientInput,this.ingredients)
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Pulisci le sottoscrizioni quando il componente viene distrutto
  }

  setFilteredIngredients(ingredientInput: string, ingredients: Ingredient[]) {
    if (ingredientInput === '') {
      this.filteredIngredients = [];
    } else {
      this.filteredIngredients = ingredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(ingredientInput.toLowerCase())
      );
    }
  }

  onIngredientInputChange() {
    // Chiamato ogni volta che l'input cambia, aggiorna i risultati filtrati
      this.setFilteredIngredients(this.ingredientInput, this.ingredients);
      console.log(this.ingredients)
  }

  addIngredientToSearch(ingredient: Ingredient) {
    if (ingredient.name.trim() !== '') {
      this.ingredientService.addIngredient(ingredient);
      this.ingredientInput = '';
    }
  }

  removeIngredient(index: number) {
    this.ingredientService.removeIngredient(index);
  }
}
