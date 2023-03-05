import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenteaveisComponent } from './presenteaveis.component';

describe('PresenteaveisComponent', () => {
  let component: PresenteaveisComponent;
  let fixture: ComponentFixture<PresenteaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenteaveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenteaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
