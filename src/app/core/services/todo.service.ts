import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TodoDto } from '../dto/todo.dto';
import todoJSON from '../mocks/todo.mock';

@Injectable()
export class TodoService {

  constructor() { }

  public getTodoList(): Observable<Array<TodoDto>> {
    // http
    return of(todoJSON.result);
  }

}
