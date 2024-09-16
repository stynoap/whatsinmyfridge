import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.interface';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../../ui/tag/tag.component';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../models/ingredient.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  filteredRecipes: Recipe[] = [];
  ingredients: Ingredient[] = [];
  recipes: Recipe[] = [];
  ingredients$: Observable<Ingredient[]>; // Observable per gli ingredienti

  constructor(
    private recipeService: RecipesService,
    private ingredientService: IngredientsService
  ) {
    this.ingredients$ = this.ingredientService.ingredients$; // Usa l'Observable dal servizio
  }

  ngOnInit(): void {
    // Carica sia le ricette che gli ingredienti
    this.loadRecipesAndIngredients();
  }

  // Metodo per caricare sia le ricette che gli ingredienti
  loadRecipesAndIngredients(): void {
    // Carica le ricette in modo sincrono
    this.recipes = this.recipeService.getRecipes();

    // Sottoscriviti all'Observable degli ingredienti per ottenere i dati man mano che arrivano
    this.ingredients$.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        // Esegui il filtro ogni volta che gli ingredienti cambiano
        this.filteringRecipes();
      },
      (error) => {
        console.error('Errore nel caricamento degli ingredienti:', error);
      }
    );
  }

  filteringRecipes(): void {
    // Svuota l'array delle ricette filtrate prima di applicare il nuovo filtro
    this.filteredRecipes = [];

    // Itera su tutte le ricette per vedere se gli ingredienti corrispondono
    this.recipes.forEach((recipe) => {
      // Crea un set con i nomi degli ingredienti della ricetta
      let ingredientsOfRecipe = new Set(
        recipe.ingredients.map((ingredient) =>
          ingredient.name.toLowerCase()
        )
      );

      // Filtra gli ingredienti che sono presenti sia nella ricerca che nella ricetta
      const commonIngredients = this.ingredients.filter((item) =>
        ingredientsOfRecipe.has(item.name.toLowerCase())
      );

      // Aggiungi la ricetta ai risultati filtrati solo se tutti gli ingredienti corrispondono
      if (commonIngredients.length === recipe.ingredients.length) {
        this.filteredRecipes.push(recipe);
      }
    });

    console.log(this.filteredRecipes)
  }
}
