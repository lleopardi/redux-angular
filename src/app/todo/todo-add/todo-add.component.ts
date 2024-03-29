import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AGREGAR_TODO, AgregarTodoAction } from '../todo.actions';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if ( !this.txtInput.valid) { return ; }
    const accion = new AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(accion);
    this.txtInput.setValue('');
  }

}
