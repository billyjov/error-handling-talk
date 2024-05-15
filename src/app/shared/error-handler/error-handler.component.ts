import { JsonPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, JsonPipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.scss',
})
export class ErrorHandlerComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {
    console.log('Error Data inside component: ', data);
  }
}
