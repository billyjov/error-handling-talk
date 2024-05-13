import { Routes } from '@angular/router';
import { formEditGuard } from './shared/guards/form-edit.guard';

export const routes: Routes = [
  {
    path: 'chunks',
    loadComponent: () =>
      import('./chunks/chunks.component').then((m) => m.ChunksComponent),
  },
  {
    path: 'forgotten-inputs',
    loadComponent: () =>
      import('./forgotten-inputs/forgotten-inputs.component').then(
        (m) => m.ForgottenInputsComponent
      ),
    canDeactivate: [formEditGuard],
  },
  {
    path: 'runtime',
    loadComponent: () =>
      import('./runtime/runtime.component').then((m) => m.RuntimeComponent),
  },
  {
    path: 'control-flow',
    loadComponent: () =>
      import('./control-flow/control-flow.component').then(
        (m) => m.ControlFlowComponent
      ),
  },
];
