import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoDto } from '../../dto/todo.dto';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input()
  public item: TodoDto = null;

  @Output()
  public removeItem: EventEmitter<TodoDto> = new EventEmitter();

  constructor() {
  }

  public remove(item: TodoDto): void {
    this.removeItem.emit(item);
  }

}
