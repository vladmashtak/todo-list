import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
  public todoForm: FormGroup;

  @Output()
  public create: EventEmitter<{title: string; description: string}> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.todoForm = this.createForm();
  }

  public submitForm(form: FormGroup): void {
    this.create.emit(form.value);
    form.reset();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.compose([Validators.maxLength(3), Validators.required])],
      description: ['', Validators.compose([Validators.maxLength(3), Validators.required])]
    });
  }
}
