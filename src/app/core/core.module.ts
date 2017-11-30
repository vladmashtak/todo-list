import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CORE_ROUTER_MODULE } from './core-routing.module';
import { metaReducers, reducers } from './reducers';
import { TodoService } from './services/todo.service';
import { TodoEffectService } from './effects/todo-effect.service';

import { AppComponent } from './containers/app/app.component';
import { MainComponent } from './containers/main/main.component';

import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoPaginatorComponent } from './components/todo-paginator/todo-paginator.component';
import { TodoItemListComponent } from './components/todo-item-list/todo-item-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoSideBarComponent } from './components/todo-side-bar/todo-side-bar.component';

const COMPONENTS = [
  AppComponent,
  MainComponent,
  TodoPaginatorComponent,
  TodoFormComponent,
  TodoItemListComponent,
  TodoItemComponent,
  TodoSideBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CORE_ROUTER_MODULE,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TodoEffectService])
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        TodoEffectService,
        TodoService
      ],
    };
  }
}
