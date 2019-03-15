import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.action';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
