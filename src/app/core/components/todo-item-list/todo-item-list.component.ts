import { Component, Input, OnInit } from '@angular/core';
import { TodoDto } from '../../dto/todo.dto';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss']
})
export class TodoItemListComponent implements OnInit {
  @Input()
  public todoList: Array<TodoDto> = [];

  constructor() { }

  ngOnInit() {
  }

}
