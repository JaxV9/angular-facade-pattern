import { createAction, props } from '@ngrx/store';

export const loadPokemon = createAction(
    '[Pokemon] Load Pokemon'
);

export const loadPokemonSuccess = createAction(
    '[Pokemon] Load Pokemon Success',
    props<{ pokemonList: any[] }>()
);

export const loadPokemonFailure = createAction(
    '[Pokemon] Load Pokemon Failure',
    props<{ error: any }>()
);
