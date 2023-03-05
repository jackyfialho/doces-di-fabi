import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocesNoPoteComponent } from './doces-no-pote.component';

describe('DocesNoPoteComponent', () => {
  let component: DocesNoPoteComponent;
  let fixture: ComponentFixture<DocesNoPoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocesNoPoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesNoPoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
