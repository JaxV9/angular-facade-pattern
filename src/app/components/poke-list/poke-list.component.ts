import { Component } from '@angular/core';
import { PokemonFacade } from '../../store/facades/pokeapi.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {
  pokemonList$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private pokemonFacade: PokemonFacade) { 
    this.pokemonList$ = this.pokemonFacade.pokemonList$;
    this.loading$ = this.pokemonFacade.loading$;
    this.error$ = this.pokemonFacade.error$;
  }

  ngOnInit(): void {
    this.pokemonFacade.loadPokemon();
  }
}
