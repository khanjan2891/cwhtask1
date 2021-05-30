import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarevigerComponent } from './careviger.component';

describe('CarevigerComponent', () => {
  let component: CarevigerComponent;
  let fixture: ComponentFixture<CarevigerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarevigerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarevigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
