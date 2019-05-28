import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablePlayerComponent } from './components/observable-player/observable-player.component';
import { OfComponent } from './operators/of.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    ObservablePlayerComponent,
  OfComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
