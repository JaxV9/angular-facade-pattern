import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokeapiService } from '../../service/pokeapi.service';
import { loadPokemon, loadPokemonFailure, loadPokemonSuccess } from '../actions/pokeapi.actions';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class PokemonEffects {

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      mergeMap(action => {
        console.log('Effect triggered', action);
        return this.pokeapiService.getPokemonsList().pipe(
          map(data => loadPokemonSuccess({ pokemonList: data.results })),
          catchError(error => {
            console.error('Error occurred', error);
            return of(loadPokemonFailure({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokeapiService: PokeapiService
  ) {
    console.log('Actions:', this.actions$);
    console.log('PokeapiService:', this.pokeapiService);
  }
}
