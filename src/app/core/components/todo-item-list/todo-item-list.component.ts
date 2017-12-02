import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoDto } from '../../dto/todo.dto';
import { State } from '../../reducers/index';
import { RemoveTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemListComponent implements OnChanges {
  @Input()
  public todoList: Array<TodoDto> = [];

  public readonly ITEMS_LIMIT: number = 12;
  public itemsOffset: number;

  constructor(private store: Store<State>) {
  }

  public ngOnChanges(): void {
    this.itemsOffset = 0;
  }

  public removeItem(item: TodoDto): void {
    this.store.dispatch(new RemoveTodo(item));
  }

  public pageChange(page: number): void {
    this.itemsOffset = page;
  }
}
