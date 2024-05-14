import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Todo } from './todo';
import { SuperUser } from './user';
import { HotToastService } from '@ngxpert/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class ControlFlowService {
  private http = inject(HttpClient);
  private toast = inject(HotToastService);

  public todos$: Observable<Todo[]> = this.http
    .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      // 🍿TIP: Catch error and rethrow error;
      catchError(this.handleError)
    );

  public users$: Observable<SuperUser[]> = this.http
    .get<SuperUser[]>('https://jsonplaceholder.typicode.com/users')
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

  public getTodoByUserId(userId: number): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(
        `https://jsonplaceholder.typicode.com/todosd?userId=${userId}`
      )
      .pipe(
        // 🍿TIP: Catch error and rethrow error not suitable for this case;
        catchError(this.handleError)

        // catchError(() => {
        //   this.toast.error(`Sorry, no todos found for user with id ${userId}`);
        //   return of([]);
        // })
      );
  }

  private handleError(error: any) {
    // 🍿 TIP: user Observable<never> for better typing
    // private handleError(error: any): Observable<never> {
    const message = 'Sorry following error ocurred: ' + error.message;
    console.error(error);
    return throwError(() => message);
  }
}
