import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.error('An error occurred:', error);
    // do something with the exception
  }
}
