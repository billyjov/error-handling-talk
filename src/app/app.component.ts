import { DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isLoading = false;

  // 🍿TIP: handle navigation error globally
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      // console.log(event);

      this.handleRouterEvent(event);
    });
  }

  private handleRouterEvent(event: Event) {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (
      event instanceof NavigationEnd ||
      event instanceof NavigationError ||
      event instanceof NavigationCancel
    ) {
      this.isLoading = false;
    }

    // console.log(event);
  }
}
