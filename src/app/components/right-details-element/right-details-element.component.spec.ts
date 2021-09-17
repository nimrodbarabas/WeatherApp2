import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDetailsElementComponent } from './right-details-element.component';

describe('RightDetailsElementComponent', () => {
  let component: RightDetailsElementComponent;
  let fixture: ComponentFixture<RightDetailsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightDetailsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDetailsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
