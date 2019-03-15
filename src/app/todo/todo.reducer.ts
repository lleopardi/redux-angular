import {
  Acciones,
  AGREGAR_TODO,
  TOGGLE_TODO,
  EDITAR_TODO,
  BORRAR_TODO,
  TOGGLE_ALL_TODO,
  LIMPIAR_COMPLETADOS
} from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('vencer a thanos');
const todo2 = new Todo('joder al baby');
const todo3 = new Todo('matar a maduro');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {
  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case TOGGLE_TODO:
      // hay que tener cuidado de no modificar incluso cada elemento del array
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit, completado: !todoEdit.completado
          };
        }
        return todoEdit;
      });

    case EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return { ...todoEdit, texto: action.texto };
        }
        return todoEdit;
      });

    case BORRAR_TODO:
      return state.filter(todoDelete => todoDelete.id !== action.id);

    case TOGGLE_ALL_TODO:
      return state.map(todoToggle => {
        return { ...todoToggle, completado: action.completado };
      });

    case LIMPIAR_COMPLETADOS:
      return state.filter( todoLimpiar => !todoLimpiar.completado);

    default:
      return state;
  }
}
