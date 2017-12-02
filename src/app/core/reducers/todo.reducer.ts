import * as todo from '../actions/todo.actions';
import { TodoDto } from '../dto/todo.dto';

export interface State {
  list: Array<TodoDto>;
  groupByTitle: string;
  groupByDate: string;
}

const initialState: State = {
  list: [],
  groupByTitle: '',
  groupByDate: ''
};

export function reducer(state: State = initialState,
                        action: todo.Actions): State {
  switch (action.type) {

    case todo.LOAD_SUCCESS: {
      return {
        ...state,
        list: action.payload
      };
    }

    case todo.ADD_TODO_SUCCESS: {
      const dateObj = new Date(),
        month = dateObj.getUTCMonth() + 1,
        day = dateObj.getUTCDate(),
        year = dateObj.getUTCFullYear();

      const id: number = state.list.length;
      const created_at: string = year + '/' + month + '/' + day;

      const todoItem: TodoDto = {
        id,
        ...action.payload,
        created_at
      };

      return {
        ...state,
        list: [todoItem, ...state.list]
      };
    }

    case todo.REMOVE_TODO_SUCCESS: {
      return {
        ...state,
        list: state.list.filter((listItem: TodoDto) => listItem.id !== action.payload.id)
      };
    }

    case todo.GROUP_TODO: {
      return {
        ...state,
        groupByTitle: action.payload.groupByTitle,
        groupByDate: action.payload.groupByDate
      };
    }

    default: {
      return state;
    }
  }
}

export const todoListGetter = (state: State) => state.list;

export const todoGroupByTitleGetter = (state: State) => state.groupByTitle;

export const todoGroupByDateGetter = (state: State) => state.groupByDate;
