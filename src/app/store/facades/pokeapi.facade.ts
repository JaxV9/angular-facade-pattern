import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemon } from '../actions/pokeapi.actions';
import { selectPokemonList, selectLoading, selectError } from '../selectors/pokeapi.selectors';

@Injectable({
  providedIn: 'root'
})
export class PokemonFacade {

  pokemonList$
  loading$
  error$

  constructor(private store: Store) {
    // Initialisation correcte après injection
    this.pokemonList$ = this.store.select(selectPokemonList);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  loadPokemon(limit: number = 10, offset: number = 0) {
    this.store.dispatch(loadPokemon({ limit, offset }));
  }
}
