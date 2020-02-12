import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCultureComponent } from './add-culture.component';

describe('AddCultureComponent', () => {
  let component: AddCultureComponent;
  let fixture: ComponentFixture<AddCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
