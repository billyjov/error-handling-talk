import { ErrorHandler, inject } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { ErrorHandlerComponent } from './error-handler.component';
import { ErrorDialogService } from './error-dialog.service';

export class CustomErrorHandler implements ErrorHandler {
  private dialogService = inject(ErrorDialogService);

  handleError(error: any) {

    // 🍿Tip: Check if the error was caught by an interceptor
    // if ((error).caughtByInterceptor) {
    //   return;
    // }
    console.error('An error occurred:', error);
    // do something with the exception

    // this.dialogService.openDialog('error');

    console.log('Dialog was not opened');
    // 🍿Tip: If you use webpack based chunks
    // const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    // if (chunkFailedMessage.test(error.message)) {
    //   console.error('Chunk failed to load');
    //   window.location.reload();
    // }

    // 🍿Tip: Groups your logs
    // console.group('Error Stack');
    // console.warn('Error Stack:', error.stack);
    // console.warn('Error Name:', error.name);
    // console.warn('Error Message:', error.message);
    // console.warn('Error:', error);
    // console.groupEnd();

    // 🍿Tip: If you use Vite based chunks
    // if (error instanceof TypeError && error.message.includes('Failed to fetch dynamically imported module')) {

    //   // ONLY FOR DEMO PURPOSES
    //   console.error('Chunk failed to load 🛑' );

    //   // Reload the page to recover from the error
    //   // window.location.reload();
    // }
  }
}
