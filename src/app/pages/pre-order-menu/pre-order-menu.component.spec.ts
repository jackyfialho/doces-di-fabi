import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderMenuComponent } from './pre-order-menu.component';

describe('PreOrderMenuComponent', () => {
  let component: PreOrderMenuComponent;
  let fixture: ComponentFixture<PreOrderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreOrderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOrderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
