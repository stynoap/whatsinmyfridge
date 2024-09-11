import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngredientsInputComponent } from "./components/ingredients-input/ingredients-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientsInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whatsinmyfridge';
}
