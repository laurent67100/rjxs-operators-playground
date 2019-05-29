import { Component } from '@angular/core';
import { of, range } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-first',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Take the first odd value', observable: source$ },
              { description: 'Take the first odd value - Error', observable: sourceEmpty$ }
           ]"
          [operatorDescription]="[
              'Emit first value of source or first to pass provided expression',
              'Throws an error if the source completes without emitting any value (!= take(1))'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class FirstComponent  {
  
  source$ = range(1, 10).pipe(
    first(number => number % 2 === 0),
  );
  
  sourceEmpty$ = of(1).pipe(
    first(number => number % 2 === 0),
  );
  
}
