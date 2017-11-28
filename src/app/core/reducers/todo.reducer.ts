import * as todo from '../actions/todo.actions';
import { TodoDto } from '../dto/todo.dto';

export interface State {
  list: Array<TodoDto>;
}

const initialState: State = {
  list: []
};

export function reducer(state: State = initialState,
                        action: todo.Actions): State {
  switch (action.type) {

    case todo.LOAD_SUCCESS: {
      return {
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
        list: [...state.list, todoItem]
      };
    }

    case todo.REMOVE_TODO_SUCCESS: {
      return {
        list: state.list.filter((listItem: TodoDto) => listItem.id !== action.payload.id)
      };
    }

    default: {
      return state;
    }
  }
}

export const todoListGetter = (state: State) => state.list;
