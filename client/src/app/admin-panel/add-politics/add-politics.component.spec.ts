import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliticsComponent } from './add-politics.component';

describe('AddPoliticsComponent', () => {
  let component: AddPoliticsComponent;
  let fixture: ComponentFixture<AddPoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
