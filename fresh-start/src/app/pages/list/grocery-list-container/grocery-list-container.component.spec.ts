import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListContainerComponent } from './grocery-list-container.component';

describe('GroceryListContainerComponent', () => {
  let component: GroceryListContainerComponent;
  let fixture: ComponentFixture<GroceryListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
