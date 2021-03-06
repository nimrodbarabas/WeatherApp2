import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDetailsComponent } from './right-details.component';

describe('RightDetailsComponent', () => {
  let component: RightDetailsComponent;
  let fixture: ComponentFixture<RightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
