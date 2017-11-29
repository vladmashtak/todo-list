import { ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';

import {
  State as TodoState, reducer as todoReducer, todoListGetter, todoGroupByTitleGetter,
  todoGroupByDateGetter
} from './todo.reducer';
import { TodoDto } from '../dto/todo.dto';

export interface State {
  todo: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

/**
 * Selectors
 */

export const todoStateGetter = (state: State) => state.todo;

export const getTodoList = createSelector(todoStateGetter, todoListGetter);

export const todoGroupByTitle = createSelector(todoStateGetter, todoGroupByTitleGetter);

export const todoGroupByDate = createSelector(todoStateGetter, todoGroupByDateGetter);

export const getTodoListWithFilter = createSelector(
  getTodoList,
  todoGroupByTitle,
  todoGroupByDate,
  (todoList: Array<TodoDto>, title: string, date: string) => {
    let list: Array<TodoDto> = [...todoList];

    if (title !== '') {
      list = list.filter((item: TodoDto) => {
        const lcItemTitle = item.title.toLowerCase();
        const lcSearchTitle = title.toLowerCase();

        return lcItemTitle.includes(lcSearchTitle);
      });
    }

    if (date !== '') {
      list = list.filter(item => item.created_at === date);
    }

    return list;
  });

export const getTodoDateList = createSelector(getTodoList, (todoList: Array<TodoDto>) =>
  todoList
    .map(item => item.created_at)
    .filter((value, index, self) => self.indexOf(value) === index)
);
