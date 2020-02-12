import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveNewsComponent } from './remove-news.component';

describe('RemoveNewsComponent', () => {
  let component: RemoveNewsComponent;
  let fixture: ComponentFixture<RemoveNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
