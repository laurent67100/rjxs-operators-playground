import { Component } from '@angular/core';
import { of, range } from 'rxjs';
import { filter, first, last } from 'rxjs/operators';


@Component({
  selector: 'app-last',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Take the last odd value', observable: source$ },
              { description: 'Take the last odd value - Error', observable: sourceEmpty$ }
           ]"
          [operatorDescription]="[
              'Emit last value of source or first to pass provided expression',
              'Throws an error if the source completes without emitting any value (!= takeLast(1))'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
  ]
})
export class LastComponent  {
  
  source$ = range(1, 10).pipe(
    last(number => number % 2 === 0)
  );
  
  sourceEmpty$ = of(1).pipe(
    first(number => number % 2 === 0),
  );
  
}
