import { Component } from '@angular/core';
import { from } from 'rxjs';
import { magazineIssues } from '../../data/magazine';

@Component({
  selector: 'app-from',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Emit sequence of number values from a number array', observable: numberSource$ },
              { description: 'Emit all issues of all magazines', observable: magazineSource$ },
              { description: 'Emit sequence of number values from a promise', observable: promiseSource$ },
              { description: 'Emit sequence of number values from a string', observable: stringSource$ }
           ]"
          [operatorDescription]="[
              'Create an observable from an array, promise or iterable',
              'Emits values in sequence'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
    
  ]
})
export class FromComponent  {
  
  numberSource$ = from([1, 2, 3, 4, 5]);
  
  magazineSource$ = from(magazineIssues);
  
  promiseSource$ = from(new Promise(resolve => resolve('Hodddoooorr')));
  
  stringSource$ = from('Hodor');
 
}
