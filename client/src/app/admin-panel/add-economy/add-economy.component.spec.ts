import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEconomyComponent } from './add-economy.component';

describe('AddEconomyComponent', () => {
  let component: AddEconomyComponent;
  let fixture: ComponentFixture<AddEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
