import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolceWeekComponent } from './dolce-week.component';

describe('DolceWeekComponent', () => {
  let component: DolceWeekComponent;
  let fixture: ComponentFixture<DolceWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolceWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolceWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
