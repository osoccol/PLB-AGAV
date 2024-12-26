import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NoPreloading, PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(NoPreloading)), // PreloadAllModules si on veut charger toute l'application au démarrage
  ],
};
