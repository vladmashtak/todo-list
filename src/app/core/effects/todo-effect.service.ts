import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { TodoDto } from '../dto/todo.dto';
import * as todo from '../actions/todo.actions';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffectService {

  @Effect()
  loadTodoList$: Observable<Action> = this.actions$
    .ofType(todo.LOAD)
    .switchMap(() =>
        this.todoService.getTodoList()
        .map((todoList: Array<TodoDto>) => new todo.LoadSuccess(todoList))
        .catch(error => of(new todo.LoadFail(error)))
    );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$
    .ofType(todo.ADD_TODO)
    .map((action: todo.AddTodo) => action.payload)
    .map((todoItem: TodoDto) => new todo.AddTodoSuccess(todoItem));

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$
    .ofType(todo.REMOVE_TODO)
    .map((action: todo.RemoveTodo) => action.payload)
    .map((todoItem: TodoDto) => new todo.RemoveTodoSuccess(todoItem));

  constructor(private actions$: Actions, private todoService: TodoService) {}

}
