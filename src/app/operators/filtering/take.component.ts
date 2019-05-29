import { Component } from '@angular/core';
import { of, range } from 'rxjs';
import { filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-take',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Take the first 2 values from source', observable: source$ },
              { description: 'Take the first odd value', observable: sourceEmpty$ }
           ]"
          [operatorDescription]="[
              'Emit provided number of values before completing'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class TakeComponent  {
  
  source$ = range(1, 10).pipe(
    take(2)
  );
  
  sourceEmpty$ = of(1).pipe(
    filter(number => number % 2 === 0),
    take(1)
  );
  
}
