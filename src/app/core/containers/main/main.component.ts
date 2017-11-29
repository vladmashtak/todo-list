import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { getTodoDateList, getTodoListWithFilter, State } from '../../reducers/index';
import { TodoDto } from '../../dto/todo.dto';
import { AddTodo, GroupTodo, Load } from '../../actions/todo.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public todoList: Observable<Array<TodoDto>>;
  public todoDateList: Observable<Array<String>>;

  constructor(private store: Store<State>) {
    this.todoList = this.store.select(getTodoListWithFilter);
    this.todoDateList = this.store.select(getTodoDateList);
  }

  public ngOnInit(): void {
    this.store.dispatch(new Load());
  }

  public addNewTodoItem(todo: { title: string; description: string }): void {
    this.store.dispatch(new AddTodo(todo));
  }

  public groupBy(todo: { groupByTitle: string, groupByDate: string }): void {
    this.store.dispatch(new GroupTodo(todo));
  }
}
