import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-side-bar',
  templateUrl: './todo-side-bar.component.html',
  styleUrls: ['./todo-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSideBarComponent implements OnInit, OnDestroy {
  @Input()
  public dateList: Array<string> = [];

  @Output()
  public groupBy: EventEmitter<{ groupByTitle: string, groupByDate: string }> = new EventEmitter();

  public todoSortForm: FormGroup;

  private titleChangeSub: Subscription;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.todoSortForm = this.createForm();

    this.titleChangeSub = this.todoSortForm
      .get('groupByTitle')
      .valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(() => this.submitForm(this.todoSortForm));
  }

  public ngOnDestroy(): void {
    this.titleChangeSub.unsubscribe();
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
