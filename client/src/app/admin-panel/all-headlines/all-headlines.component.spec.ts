import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeadlinesComponent } from './all-headlines.component';

describe('AllHeadlinesComponent', () => {
  let component: AllHeadlinesComponent;
  let fixture: ComponentFixture<AllHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
