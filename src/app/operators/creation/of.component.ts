import { Component } from '@angular/core';
import { of } from 'rxjs';
import { magazineIssues } from '../../data/magazine';

@Component({
  selector: 'app-of',
  template:
  `<app-observable-player
          [sources]="[
              { description: 'Emit sequence of number values 1 to 5', observable: numberSource$ },
              { description: 'Emit 3 issues of magazines', observable: magazineSource$ }
           ]"
          [operatorDescription]="[
              'Create an observable from a single value or from a list of values.',
              'Emits values in sequence',
              'Synchronous'
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
