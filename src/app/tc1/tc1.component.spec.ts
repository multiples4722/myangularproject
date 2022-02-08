import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tc1Component } from './tc1.component';

describe('Tc1Component', () => {
  let component: Tc1Component;
  let fixture: ComponentFixture<Tc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
