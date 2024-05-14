import { CanDeactivateFn } from '@angular/router';
import { FormsComponent } from '../../forms/forms.component';

export const formEditGuard: CanDeactivateFn<FormsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {

  if (component.emailGroup.value) {
    return confirm('You have unsaved changes. Do you really want to exit?');
  }
  return true;
};

// console.log('Form Edit Guard 🛡️');
