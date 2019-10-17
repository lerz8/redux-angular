import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

private contador: number;

  constructor(private store: Store<AppState>) {

    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });
  }

  ngOnInit() {
  }

  multiplicar() {
    this.contador *= 2;
    this.store.dispatch( new MultiplicarAction(2) );

  }

  dividir() {
    this.contador /= 2;
    this.store.dispatch( new DividirAction(2) );
  }

}
