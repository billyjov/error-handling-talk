import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenInputsComponent } from './forgotten-inputs.component';

describe('ForgottenInputsComponent', () => {
  let component: ForgottenInputsComponent;
  let fixture: ComponentFixture<ForgottenInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgottenInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgottenInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
