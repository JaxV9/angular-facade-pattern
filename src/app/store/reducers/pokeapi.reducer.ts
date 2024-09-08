import { createReducer, on } from '@ngrx/store';
import { loadPokemon, loadPokemonFailure, loadPokemonSuccess } from '../actions/pokeapi.actions';

export interface PokemonState {
  pokemonList: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: PokemonState = {
  pokemonList: [],
  loading: false,
  error: null
};

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemon, (state) => ({ ...state, loading: true, error: null })),
  on(loadPokemonSuccess, (state, { pokemonList }) => ({ ...state, loading: false, pokemonList })),
  on(loadPokemonFailure, (state, { error }) => ({ ...state, loading: false, error }))
);