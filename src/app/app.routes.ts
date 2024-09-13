import { Routes } from '@angular/router';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';


export const routes: Routes = [
    {path: 'add-ingredient', component: AddIngredientComponent},
    {path: 'add-recipe', component: AddRecipeComponent},
    { path: 'recipes-list', component: RecipeListComponent },
    { path: '', redirectTo: '/recipes-list', pathMatch: 'full' },

];
