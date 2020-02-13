import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsDetailsComponent } from './politics-details.component';

describe('PoliticsDetailsComponent', () => {
  let component: PoliticsDetailsComponent;
  let fixture: ComponentFixture<PoliticsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
