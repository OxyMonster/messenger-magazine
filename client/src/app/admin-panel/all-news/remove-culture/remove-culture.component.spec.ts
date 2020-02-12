import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCultureComponent } from './remove-culture.component';

describe('RemoveCultureComponent', () => {
  let component: RemoveCultureComponent;
  let fixture: ComponentFixture<RemoveCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
