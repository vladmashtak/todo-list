import { Action } from '@ngrx/store';
import { TodoDto } from '../dto/todo.dto';

export const ADD_TODO = '[TODO] Add TODO';
export const ADD_TODO_SUCCESS = '[TODO] Add TODO Success';
export const ADD_TODO_FAIL = '[TODO] Add TODO Fail';
export const REMOVE_TODO = '[TODO] Remove TODO';
export const REMOVE_TODO_SUCCESS = '[TODO] Remove TODO Success';
export const REMOVE_TODO_FAIL = '[TODO] Remove TODO Fail';
export const LOAD = '[TODO] Load';
export const LOAD_SUCCESS = '[TODO] Load Success';
export const LOAD_FAIL = '[TODO] Load Fail';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: TodoDto) {}
}

export class AddTodoSuccess implements Action {
  readonly type = ADD_TODO_SUCCESS;

  constructor(public payload: TodoDto) {}
}

export class AddTodoFail implements Action {
  readonly type = ADD_TODO_FAIL;

  constructor(public payload: TodoDto) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: TodoDto) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;

  constructor(public payload: TodoDto) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;

  constructor(public payload: TodoDto) {}
}

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Array<TodoDto>) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddTodo
  | AddTodoSuccess
  | AddTodoFail
  | RemoveTodo
  | RemoveTodoSuccess
  | RemoveTodoFail
  | Load
  | LoadSuccess
  | LoadFail;
