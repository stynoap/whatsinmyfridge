import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { RECIPES } from '../data/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
  
  private recipes: Recipe[]=RECIPES;

  getRecipes(){
   return this.recipes
  }

  saveRecipe(recipe:Recipe){
    this.recipes.push(recipe)
  }

}
