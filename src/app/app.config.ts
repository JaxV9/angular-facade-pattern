import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { pokemonReducer } from './store/reducers/pokeapi.reducer';
import { PokemonEffects } from './store/effects/pokeapi.effects';
import { PokemonFacade } from './store/facades/pokeapi.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ pokemon: pokemonReducer }),
    provideEffects([PokemonEffects]),
    { provide: PokemonFacade, useClass: PokemonFacade }
  ]
};
