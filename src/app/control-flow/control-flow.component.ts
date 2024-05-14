import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EMPTY, Subject, catchError, switchMap } from 'rxjs';
import { AlertType } from '../shared/models/alert';
import { ControlFlowService } from './control-flow.service';
import { ControlFlowChildComponent } from './control-flow-child/control-flow-child.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, JsonPipe,ControlFlowChildComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  private controlFlowService = inject(ControlFlowService);
  private userIdSubject = new Subject<number>();

  public alert: { type: AlertType; message: string } = {
    type: 'success',
    message: '',
  };

  public todos$ = this.controlFlowService.todos$.pipe(
    catchError((error) => {
      this.alert = {
        type: 'error',
        message: error,
      };
      return EMPTY;
    })
  );

  public users$ = this.controlFlowService.users$.pipe(
    catchError((error) => {
      this.alert = {
        type: 'error',
        message: error,
      };
      return EMPTY;
    })
  );

  public todo$ = this.controlFlowService.todo$;

  public userTodos$ = this.userIdSubject.asObservable().pipe(
    switchMap((userId) => this.controlFlowService.getTodoByUserId(userId))
  );

  public loadTodos(event: any) {
    console.log(event.value);
    this.userIdSubject.next(event.value);
  }
}
