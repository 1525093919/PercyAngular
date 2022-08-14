import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6Component } from './es6.component';

describe('Es6Component', () => {
  let component: Es6Component;
  let fixture: ComponentFixture<Es6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
