import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVariableBetterWayComponent } from './color-variable-better-way.component';

describe('ColorVariableBetterWayComponent', () => {
  let component: ColorVariableBetterWayComponent;
  let fixture: ComponentFixture<ColorVariableBetterWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorVariableBetterWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorVariableBetterWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
