import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // 🍿 TIP: you can check if the request is an API request
  // const isApiRequest = req.url.includes('api');

  const toast: HotToastService = inject(HotToastService);

  return next(req).pipe(
    catchError((err) => {
      let error = handleServerErrorMessage(err);

      // 🍿 Please not twice !!
      // if (error.status === HttpStatusCode.NotFound) {
      //   toast.error(error.message);
      //   Object.assign(error, { caughtByInterceptor: true });
      // }

      return throwError(() => error);
    })
  );
};

const handleServerErrorMessage = (error: HttpErrorResponse) => {
  const status = error.status;
  const serverError = error.error;

  switch (status) {
    case HttpStatusCode.NotFound:
      return {
        status,
        serverError,
        // 🍿 TIP: you can include translation directly
        // message: 'err.error400',
        message: `Die Ressource konnte leider nicht gefunden werden.`,
      };
    default:
      return {
        status,
        serverError,
        message: error.message,
      };
  }
};
