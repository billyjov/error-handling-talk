import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class ControlFlowService {
  private http = inject(HttpClient);

  public todos$: Observable<Todo[]> = this.http
    .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      // 🍿TIP: Catch error and rethrow error;
      catchError(this.handleError)
    );

  public todo$: Observable<Todo> = this.http
    .get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      // 🍿TIP: Catch error and rethrow error;
      catchError(this.handleError)
    );

  private handleError(error: any) {
    // 🍿 TIP: user Observable<never> for better typing
    // private handleError(error: any): Observable<never> {
    const message = 'Sorry following error ocurred: ' + error.message;
    console.error(error);
    return throwError(() => message);
  }
}
