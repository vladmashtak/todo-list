import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSideBarComponent } from './todo-side-bar.component';

describe('TodoSideBarComponent', () => {
  let component: TodoSideBarComponent;
  let fixture: ComponentFixture<TodoSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
