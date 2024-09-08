import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokeapiService } from '../../service/pokeapi.service';
import { loadPokemon, loadPokemonFailure, loadPokemonSuccess } from '../actions/pokeapi.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PokemonEffects {

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      mergeMap(action =>
        this.pokeapiService.getPokemonsList().pipe(
          map(data => loadPokemonSuccess({ pokemonList: data.results })),
          catchError(error => of(loadPokemonFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokeapiService: PokeapiService
  ) {}
}
