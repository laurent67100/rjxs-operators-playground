import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { magazineIssues } from '../../../data/magazine';

interface OperatorCategory {
  name: string;
  operators: string[];
}

@Component({
  selector: 'app-of',
  template:
  `<app-observable-player 
          [sources]="[ 
              { desc: 'Emit sequence of number values 1 to 5', observable: numberSource$ },
              { desc: 'Emit 3 issues of magazines', observable: magazineSource$ }
           ]"
          operatorCategory="creation"
          operatorName="of"
          [operatorDescription]="[
              'Create an observable from a single value or from a list of values.',
              'Emits values in sequence'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
    
  ]
})
export class OfComponent  {
  
  
  numberSource$ = of(1, 2, 3, 4, 5);
  
  magazineSource$ = of(magazineIssues[0], magazineIssues[1], magazineIssues[2]);
  
 
}
