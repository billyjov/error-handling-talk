import { Dialog,  } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ErrorHandlerComponent } from './error-handler.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  private opened = false;
  public dialogRef: MatDialogRef<ErrorHandlerComponent> | undefined;

  constructor(private dialog: MatDialog) {}

  public openDialog(error: any): void {
    if (!this.opened) {
      this.opened = true;

      if (this.dialog?.openDialogs?.length === 0) {
        console.log('Dialog was opened with error: ', error);
        this.dialogRef = this.dialog.open(ErrorHandlerComponent, {
          data: {
            ...error,
          },
          maxHeight: '100%',
          maxWidth: '100%',
          disableClose: true,
          hasBackdrop: true,
        });

        // console.log('Dialog was opened: ', dialogRef);

        this.dialogRef.afterClosed().subscribe(() => {
          this.opened = false;
        });
      }
    }
  }

  public getDialogRef(): MatDialogRef<ErrorHandlerComponent> | undefined {
    return this.dialogRef;
  }
}
