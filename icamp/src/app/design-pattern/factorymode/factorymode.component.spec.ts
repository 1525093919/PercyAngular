import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorymodeComponent } from './factorymode.component';

describe('FactorymodeComponent', () => {
  let component: FactorymodeComponent;
  let fixture: ComponentFixture<FactorymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorymodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
