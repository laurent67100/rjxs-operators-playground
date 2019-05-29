import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-interval',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Emit sequence of values at 1 second interval', observable: intervalSource$ }
           ]"
          [operatorDescription]="[
              'Emit numbers in sequence based on provided timeframe'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class IntervalComponent  {
  
  intervalSource$ = interval(1000);
  
}
