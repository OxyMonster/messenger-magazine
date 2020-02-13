import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyDetailsComponent } from './economy-details.component';

describe('EconomyDetailsComponent', () => {
  let component: EconomyDetailsComponent;
  let fixture: ComponentFixture<EconomyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
