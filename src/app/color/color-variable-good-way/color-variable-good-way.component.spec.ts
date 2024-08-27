import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVariableGoodWayComponent } from './color-variable-good-way.component';

describe('ColorVariableGoodWayComponent', () => {
  let component: ColorVariableGoodWayComponent;
  let fixture: ComponentFixture<ColorVariableGoodWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorVariableGoodWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorVariableGoodWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
