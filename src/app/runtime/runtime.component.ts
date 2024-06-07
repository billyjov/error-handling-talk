import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ErrorHandlerComponent } from '../shared/error-handler/error-handler.component';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-runtime',
  standalone: true,
  imports: [],
  templateUrl: './runtime.component.html',
  styleUrl: './runtime.component.scss',
})
export class RuntimeComponent {
  public dialog: Dialog = inject(Dialog);
  private toast: HotToastService = inject(HotToastService);
  public throwTestError(): void {
    throw new Error('Test Error from Runtime Component');
  }

  public throwAndHandleError(): void {
    try {
      const obj: any = {};
      obj.method();
    } catch (error) {
      // do something with the error
    }
    // console.error('Error caught in Runtime Component: ', error);
    this.toast.error(
      'Diese Aktion kann derzeit nicht ausgeführt werden. Bitte versuchen Sie es später erneut.'
    );
  }
}
