import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowChildComponent } from './control-flow-child.component';

describe('ControlFlowChildComponent', () => {
  let component: ControlFlowChildComponent;
  let fixture: ComponentFixture<ControlFlowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
