import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-side-bar',
  templateUrl: './todo-side-bar.component.html',
  styleUrls: ['./todo-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSideBarComponent implements OnInit {
  @Input()
  public dateList: Array<string> = [];

  public todoSortForm: FormGroup;

  @Output()
  public groupBy: EventEmitter<{ groupByTitle: string, groupByDate: string }> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.todoSortForm = this.createForm();
  }

  public submitForm(form: FormGroup): void {
    this.groupBy.emit(form.value);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      groupByTitle: '',
      groupByDate: ''
    });
  }

}
