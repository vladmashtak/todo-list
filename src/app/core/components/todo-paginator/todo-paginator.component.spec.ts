import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPaginatorComponent } from './todo-paginator.component';

describe('TodoPaginatorComponent', () => {
  let component: TodoPaginatorComponent;
  let fixture: ComponentFixture<TodoPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
