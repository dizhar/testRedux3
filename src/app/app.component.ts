import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import {INCREMENT, DECREMENT} from './actions';
import {Map} from 'immutable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select(s => s.get('counter')) count;




constructor(private ngRedux: NgRedux<Map<String, any>>){}


INCREMENT(){
    this.ngRedux.dispatch({type: INCREMENT })
}


DECREMENT(){
  this.ngRedux.dispatch({type: DECREMENT})
}


}
