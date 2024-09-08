import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemon } from '../actions/pokeapi.actions';
import { selectPokemonList, selectLoading, selectError } from '../selectors/pokeapi.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonFacade {

  pokemonList$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.pokemonList$ = this.store.select(selectPokemonList);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  loadPokemon() {
    this.store.dispatch(loadPokemon());
  }
}
