import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5Component } from './step5.component';

describe('Step5Component', () => {
  let component: Step5Component;
  let fixture: ComponentFixture<Step5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step5Component]
    });
    fixture = TestBed.createComponent(Step5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
