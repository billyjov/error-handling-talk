import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formEditGuard } from './form-edit.guard';

describe('formEditGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formEditGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
