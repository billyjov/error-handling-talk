import { Component } from '@angular/core';

@Component({
  selector: 'app-runtime',
  standalone: true,
  imports: [],
  templateUrl: './runtime.component.html',
  styleUrl: './runtime.component.scss',
})
export class RuntimeComponent {
  public throwTestError(): void {
    throw new Error('Test Error from Runtime Component 🛑');
  }

  public throwTestTypeError(): void {

  }
}
