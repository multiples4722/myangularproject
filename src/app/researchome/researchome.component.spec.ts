import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchomeComponent } from './researchome.component';

describe('ResearchomeComponent', () => {
  let component: ResearchomeComponent;
  let fixture: ComponentFixture<ResearchomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
