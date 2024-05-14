import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-control-flow-child',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-child.component.html',
  styleUrl: './control-flow-child.component.scss',
})
export class ControlFlowChildComponent {
  @Input({ required: true }) todo!: Todo;
}
