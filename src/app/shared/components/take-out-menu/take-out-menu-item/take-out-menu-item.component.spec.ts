import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOutMenuItemComponent } from './take-out-menu-item.component';

describe('TakeOutMenuItemComponent', () => {
  let component: TakeOutMenuItemComponent;
  let fixture: ComponentFixture<TakeOutMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOutMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOutMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
