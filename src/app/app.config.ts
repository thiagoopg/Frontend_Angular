import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ChartPie, Home, LucideAngularModule } from 'lucide-angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),importProvidersFrom(LucideAngularModule.pick({ Home, ChartPie  })),
     provideHttpClient(withInterceptorsFromDi())
    ]
};
