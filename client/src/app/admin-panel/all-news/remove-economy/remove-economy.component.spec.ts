import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEconomyComponent } from './remove-economy.component';

describe('RemoveEconomyComponent', () => {
  let component: RemoveEconomyComponent;
  let fixture: ComponentFixture<RemoveEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
