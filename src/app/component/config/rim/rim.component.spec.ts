import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimComponent } from './rim.component';

describe('RimComponent', () => {
  let component: RimComponent;
  let fixture: ComponentFixture<RimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RimComponent]
    });
    fixture = TestBed.createComponent(RimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
