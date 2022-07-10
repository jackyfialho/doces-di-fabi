import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuSubitemWithImgComponent } from './list-menu-subitem-with-img.component';

describe('ListMenuSubitemWithImgComponent', () => {
  let component: ListMenuSubitemWithImgComponent;
  let fixture: ComponentFixture<ListMenuSubitemWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuSubitemWithImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuSubitemWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
