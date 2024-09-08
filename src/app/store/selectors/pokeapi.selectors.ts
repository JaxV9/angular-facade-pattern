import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../reducers/pokeapi.reducer';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemonList = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemonList
);

export const selectLoading = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.loading
);

export const selectError = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.error
);
