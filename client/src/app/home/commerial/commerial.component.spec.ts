import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerialComponent } from './commerial.component';

describe('CommerialComponent', () => {
  let component: CommerialComponent;
  let fixture: ComponentFixture<CommerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
