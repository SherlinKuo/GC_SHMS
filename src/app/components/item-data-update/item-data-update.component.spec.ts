import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDataUpdateComponent } from './item-data-update.component';

describe('ItemDataUpdateComponent', () => {
  let component: ItemDataUpdateComponent;
  let fixture: ComponentFixture<ItemDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
