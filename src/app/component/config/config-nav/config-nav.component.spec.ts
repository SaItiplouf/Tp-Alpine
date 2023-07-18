import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNavComponent } from './config-nav.component';

describe('ConfigNavComponent', () => {
  let component: ConfigNavComponent;
  let fixture: ComponentFixture<ConfigNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigNavComponent]
    });
    fixture = TestBed.createComponent(ConfigNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
