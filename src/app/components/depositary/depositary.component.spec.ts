import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaryComponent } from './depositary.component';

describe('DepositaryComponent', () => {
  let component: DepositaryComponent;
  let fixture: ComponentFixture<DepositaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
