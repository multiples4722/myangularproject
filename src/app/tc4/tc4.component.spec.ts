import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tc4Component } from './tc4.component';

describe('Tc4Component', () => {
  let component: Tc4Component;
  let fixture: ComponentFixture<Tc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
