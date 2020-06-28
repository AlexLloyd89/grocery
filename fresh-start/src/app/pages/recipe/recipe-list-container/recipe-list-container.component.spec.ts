import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListContainerComponent } from './recipe-list-container.component';

describe('RecipeListContainerComponent', () => {
  let component: RecipeListContainerComponent;
  let fixture: ComponentFixture<RecipeListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
