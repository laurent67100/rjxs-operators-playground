import { Component } from '@angular/core';
import { range } from 'rxjs';


@Component({
  selector: 'app-interval',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Emit numbers 1 to 10', observable: range1To10Source$ },
              { description: 'Emit numbers 5 to 14', observable: range5To15Source$ }
           ]"
          [operatorDescription]="[
              'Emit numbers in provided range in sequence.'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class RangeComponent  {
  
  range1To10Source$ = range(1, 10);
  
  range5To15Source$ = range(5, 10);
  
}
