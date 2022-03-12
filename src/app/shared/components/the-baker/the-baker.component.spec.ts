import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBakerComponent } from './the-baker.component';

describe('TheBakerComponent', () => {
  let component: TheBakerComponent;
  let fixture: ComponentFixture<TheBakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
