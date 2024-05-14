import { Dialog,  } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ErrorHandlerComponent } from './error-handler.component';


@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  private opened = false;

  constructor(private dialog: Dialog) {}

  public openDialog(error: any): void {
    if (!this.opened) {
      this.opened = true;

      if (this.dialog?.openDialogs?.length === 0) {
        console.log('Dialog was opened');
        const dialogRef = this.dialog.open(ErrorHandlerComponent, {
          data: {
            ...error,
          },
          maxHeight: '100%',
          maxWidth: '100%',
          disableClose: true,
          hasBackdrop: true,
        });

        console.log('Dialog was opened: ', dialogRef);

        // dialogRef.afterClosed().subscribe(() => {
        //   this.opened = false;
        // });
        dialogRef.closed.subscribe(() => {
          this.opened = false;
        });
      }
    }
  }
}
