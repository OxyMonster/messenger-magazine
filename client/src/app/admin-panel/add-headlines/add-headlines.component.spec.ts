import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadlinesComponent } from './add-headlines.component';

describe('AddHeadlinesComponent', () => {
  let component: AddHeadlinesComponent;
  let fixture: ComponentFixture<AddHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
