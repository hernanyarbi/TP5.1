import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSchoolComponent } from './basket-school.component';

describe('BasketSchoolComponent', () => {
  let component: BasketSchoolComponent;
  let fixture: ComponentFixture<BasketSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
