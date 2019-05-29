import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-timer',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Emits every half second, after 2 seconds', observable: timerSource$ }
           ]"
          [operatorDescription]="[
              'Starts emitting after given duration',
              'Then emits in sequence at the specified duration'
              ]"
  >
  </app-observable-player>
  `
})
export class TimerComponent  {
  
  timerSource$ = timer(2000, 500);
  
}
