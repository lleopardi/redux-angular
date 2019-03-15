import { filtrosValidos, acciones, SET_FILTER } from './filter.action';

const estadoInical: filtrosValidos  = 'todos';

export function filtroReducer( state = estadoInical, action: acciones): filtrosValidos {
  switch (action.type) {
    case SET_FILTER:
      return action.filtro;

    default:
      return state;
  }
}
