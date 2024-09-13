import { Ingredient } from "./ingredient.interface";

export interface Recipe {
    name: string;
    procedure: string;
    ingredients: Ingredient[]
}
