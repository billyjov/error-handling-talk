import { CanDeactivateFn } from '@angular/router';

export const formEditGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log('Form Edit Guard 🛡️');
  return true;
};
