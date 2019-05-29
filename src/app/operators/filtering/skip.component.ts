import { Component } from '@angular/core';
import { range } from 'rxjs';
import { filter, skip } from 'rxjs/operators';


@Component({
  selector: 'app-skip',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Skip the first 2 values from source', observable: source$ }
           ]"
          [operatorDescription]="[
              'Skip the provided number of emitted values'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class SkipComponent  {
  
  source$ = range(1, 10).pipe(
    skip(2)
  );
  
}
