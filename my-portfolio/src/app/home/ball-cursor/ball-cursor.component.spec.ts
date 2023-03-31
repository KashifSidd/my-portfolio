import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallCursorComponent } from './ball-cursor.component';

describe('BallCursorComponent', () => {
  let component: BallCursorComponent;
  let fixture: ComponentFixture<BallCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallCursorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
