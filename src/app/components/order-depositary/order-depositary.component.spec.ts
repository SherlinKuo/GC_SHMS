import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDepositaryComponent } from './order-depositary.component';

describe('OrderDepositaryComponent', () => {
  let component: OrderDepositaryComponent;
  let fixture: ComponentFixture<OrderDepositaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDepositaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDepositaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
