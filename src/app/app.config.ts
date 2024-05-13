import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHotToastConfig } from '@ngxpert/hot-toast';

import { routes } from './app.routes';
import { CustomErrorHandler } from './shared/error-handler/custom-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHotToastConfig(),
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
};
