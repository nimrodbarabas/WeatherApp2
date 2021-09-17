import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDaysComponent } from './right-days.component';

describe('RightDaysComponent', () => {
  let component: RightDaysComponent;
  let fixture: ComponentFixture<RightDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
