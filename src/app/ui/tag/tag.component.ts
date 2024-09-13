import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.interface';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() ingredient!: Ingredient;
  @Output() ingredientSelected = new EventEmitter<Ingredient>()

onClick(){
  this.ingredientSelected.emit(this.ingredient)
}
}
