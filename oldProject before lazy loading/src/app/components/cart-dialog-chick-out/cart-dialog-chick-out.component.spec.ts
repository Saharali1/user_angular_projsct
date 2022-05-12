import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogChickOutComponent } from './cart-dialog-chick-out.component';

describe('CartDialogChickOutComponent', () => {
  let component: CartDialogChickOutComponent;
  let fixture: ComponentFixture<CartDialogChickOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDialogChickOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDialogChickOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
