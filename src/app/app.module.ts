import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablePlayerComponent } from './components/observable-player/observable-player.component';
import { OfComponent } from './operators/creation/of/of.component';
import { OperatorsRoutingModule } from './routing.module';
import { OperatorsComponent } from './components/operators/operators.component';

@NgModule({
  imports:      [ BrowserModule, OperatorsRoutingModule ],
  declarations: [ 
    AppComponent, 
    ObservablePlayerComponent,
    OperatorsComponent,
    OfComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
