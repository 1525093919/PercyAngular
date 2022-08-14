import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es10Component } from './es10.component';

describe('Es10Component', () => {
  let component: Es10Component;
  let fixture: ComponentFixture<Es10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Es10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
