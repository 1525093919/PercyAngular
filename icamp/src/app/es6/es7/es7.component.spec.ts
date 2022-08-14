import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es7Component } from './es7.component';

describe('Es7Component', () => {
  let component: Es7Component;
  let fixture: ComponentFixture<Es7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Es7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
