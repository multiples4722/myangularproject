import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tc3Component } from './tc3.component';

describe('Tc3Component', () => {
  let component: Tc3Component;
  let fixture: ComponentFixture<Tc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
