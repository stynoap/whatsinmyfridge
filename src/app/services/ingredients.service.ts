import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private ingredients:string[] = []

  constructor() { }

  getIngredients():string[]{
    return this.ingredients
  }

addIngredient(ingredient:string): void{
  this.ingredients.push(ingredient)
}

removeIngredient(index:number):void{
  this.ingredients.splice(index, 1)
}

}
