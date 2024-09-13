import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.interface';
import { CommonModule } from '@angular/common';
import { TagComponent } from "../../ui/tag/tag.component";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  constructor(private recipeService: RecipesService) {}

  get recipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }
}
