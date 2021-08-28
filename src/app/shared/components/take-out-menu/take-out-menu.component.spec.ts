import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOutMenuComponent } from './take-out-menu.component';

describe('TakeOutMenuComponent', () => {
  let component: TakeOutMenuComponent;
  let fixture: ComponentFixture<TakeOutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOutMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
