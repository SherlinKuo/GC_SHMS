import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositaryComponent } from './create-depositary.component';

describe('CreateDepositaryComponent', () => {
  let component: CreateDepositaryComponent;
  let fixture: ComponentFixture<CreateDepositaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepositaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDepositaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
