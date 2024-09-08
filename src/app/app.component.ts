import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-facade-pattern';
}
