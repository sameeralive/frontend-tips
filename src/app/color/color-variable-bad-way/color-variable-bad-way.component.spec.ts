import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVariableBadWayComponent } from './color-variable-bad-way.component';

describe('ColorVariableBadWayComponent', () => {
  let component: ColorVariableBadWayComponent;
  let fixture: ComponentFixture<ColorVariableBadWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorVariableBadWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorVariableBadWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
