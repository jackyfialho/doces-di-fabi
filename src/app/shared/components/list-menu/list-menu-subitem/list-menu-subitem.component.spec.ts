import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuSubitemComponent } from './list-menu-subitem.component';

describe('ListMenuSubitemComponent', () => {
  let component: ListMenuSubitemComponent;
  let fixture: ComponentFixture<ListMenuSubitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuSubitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
