import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepositaryComponent } from './edit-depositary.component';

describe('EditDepositaryComponent', () => {
  let component: EditDepositaryComponent;
  let fixture: ComponentFixture<EditDepositaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepositaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepositaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
