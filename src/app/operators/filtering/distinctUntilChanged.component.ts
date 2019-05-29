import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-distinctUntilChanged',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'distinctUntilChanged with basic values', observable: source$ }
           ]"
          [operatorDescription]="[
              'Emit when the current value is different from the previous one'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class DistinctUntilChangedComponent  {
  
  source$ = from([1, 2, 2, 2, 3, 3, 1, 2]).pipe(
    distinctUntilChanged()
  );
  
}
