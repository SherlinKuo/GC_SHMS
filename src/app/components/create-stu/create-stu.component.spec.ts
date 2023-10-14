import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStuComponent } from './create-stu.component';

describe('CreateStuComponent', () => {
  let component: CreateStuComponent;
  let fixture: ComponentFixture<CreateStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
