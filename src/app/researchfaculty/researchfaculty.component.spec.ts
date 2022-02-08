import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchfacultyComponent } from './researchfaculty.component';

describe('ResearchfacultyComponent', () => {
  let component: ResearchfacultyComponent;
  let fixture: ComponentFixture<ResearchfacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchfacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
