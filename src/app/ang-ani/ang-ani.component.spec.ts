import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngAniComponent } from './ang-ani.component';

describe('AngAniComponent', () => {
  let component: AngAniComponent;
  let fixture: ComponentFixture<AngAniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngAniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngAniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
