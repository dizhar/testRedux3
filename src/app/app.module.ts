import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store' 
import {fromJS, Map} from 'immutable';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
      
  constructor(private ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }


}
