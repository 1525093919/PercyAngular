import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es8Component } from './es8.component';

describe('Es8Component', () => {
  let component: Es8Component;
  let fixture: ComponentFixture<Es8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Es8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
