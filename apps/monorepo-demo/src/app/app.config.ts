import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NoPreloading, PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './store/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes,
    withPreloading(NoPreloading)), // PreloadAllModules si on veut charger toute l'application au démarrage
    provideStore({ state: appReducer }),
    provideEffects([UserEffects]),
    provideStoreDevtools()
  ],
};
