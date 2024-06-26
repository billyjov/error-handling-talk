import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeComponent } from './runtime.component';

describe('RuntimeComponent', () => {
  let component: RuntimeComponent;
  let fixture: ComponentFixture<RuntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuntimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
