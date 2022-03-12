import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterMenuComponent } from './easter-menu.component';

describe('EasterMenuComponent', () => {
  let component: EasterMenuComponent;
  let fixture: ComponentFixture<EasterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
