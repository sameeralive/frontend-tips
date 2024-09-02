import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCommonComponent } from './mt-common.component';

describe('MtCommonComponent', () => {
  let component: MtCommonComponent;
  let fixture: ComponentFixture<MtCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
