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
    // console.error('An error occurred:', error);
    // do something with the exception

    // this.dialogService.openDialog({
    //   message: 'Ein Fehler ist aufgetreten',
    //   error: error,
    // });

    // this.dialogService.getDialogRef()?.afterClosed().subscribe(() => {
    //   // Reload the page to recover from the error
    //   window.location.reload();
    // });
     if (!navigator.onLine) {
       this.dialogService.openDialog({
         message:
           'Es sieht so aus als ob du offline bist. Bitte überprüfe deine Internetverbindung.',
         error,
       });
     }

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
    if (
      error instanceof TypeError &&
      error.message.includes('Failed to fetch dynamically imported module')
    ) {
      // ONLY FOR DEMO PURPOSES
      console.error('Chunk failed to load 🛑');

      if (!navigator.onLine) {
        console.log('You are offline');
        const message = 'Es sieht so aus als ob du offline bist. Bitte überprüfe deine Internetverbindung.';
        this.dialogService.openDialog({
          message,
          error,
        });
      }

      // const message = 'Es sieht so aus als ob du eine ältere Version der Anwendung geladen hast. Bitte lade die Seite neu.';
      // this.dialogService.openDialog({
      //   message,
      //   error,
      // });

      // this.dialogService.getDialogRef()?.afterClosed().subscribe(() => {

      //   // Reload the page to recover from the error
      //   window.location.reload();
      // });
    }
  }
}
