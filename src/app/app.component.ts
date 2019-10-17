import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  contador: number;

  constructor( private store: Store<AppState>) {
    // escuchando el cambio del state completo
    // this.store.subscribe(state => {
    //   console.log(state);
    //   this.contador = state.contador;
    // });

    // escuchando el state pero accediendo a una propiedad especifica

    this.store.select('contador').subscribe(contador => (this.contador = contador));
  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
