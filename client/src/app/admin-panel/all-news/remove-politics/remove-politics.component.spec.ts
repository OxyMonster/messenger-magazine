import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePoliticsComponent } from './remove-politics.component';

describe('RemovePoliticsComponent', () => {
  let component: RemovePoliticsComponent;
  let fixture: ComponentFixture<RemovePoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
