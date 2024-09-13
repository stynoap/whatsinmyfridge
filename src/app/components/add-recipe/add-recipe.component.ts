import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.interface';
import { Ingredient } from '../../models/ingredient.interface';
import { TagComponent } from '../../ui/tag/tag.component';
import { IngredientsService } from '../../services/ingredients.service';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './add-recipe.component.html',
})
export class AddRecipeComponent {
  recipeOnSaving!: Recipe;

  constructor(
    private ingredientService: IngredientsService,
    private recipeService: RecipesService
  ) {}

  ingredientInput: string = '';
  newIngredient: Ingredient = { name: '' };
  filteredIngredients: Ingredient[] = [];
  inputName!: string;
  procedureInput!: string;
  ingredientsOfRecipe: Ingredient[]=[];

  get savedIngredients(): Ingredient[] {
    return this.ingredientService.getSavedIngredients();
  }

  setFilteredIngredients(ingredientInput: string) {
    this.filteredIngredients = this.savedIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(ingredientInput.toLowerCase())
    );
  }

  onIngredientInputChange() {
    this.setFilteredIngredients(this.ingredientInput);
  }

  addIngredientToRecipe(ingredient: Ingredient) {
    if (
      !this.ingredientsOfRecipe.find((i) => i.name === ingredient.name)
    ) {
      this.ingredientsOfRecipe.push(ingredient);
    }
    this.ingredientInput = '';
    this.filteredIngredients = [];
  }

  removeIngredientByRecipe(ingredientToRemove: Ingredient) {
    this.recipeOnSaving.ingredients = this.ingredientsOfRecipe.filter(
      (ing) => ing.name !== ingredientToRemove.name
    );
  }

  onSaveRecipe() {
    if ( this.inputName && this.procedureInput && this.ingredientsOfRecipe.length > 0) {
      this.recipeOnSaving = {
        procedure: this.procedureInput,
        name: this.inputName,
        ingredients: this.ingredientsOfRecipe,
      };
      
    this.recipeService.saveRecipe(this.recipeOnSaving);
    console.log(this.recipeOnSaving);
    }

  }
}
