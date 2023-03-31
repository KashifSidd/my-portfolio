import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySectionComponent } from './my-section.component';

describe('MySectionComponent', () => {
  let component: MySectionComponent;
  let fixture: ComponentFixture<MySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
