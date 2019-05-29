import { Component } from '@angular/core';
import { range } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Emits every odd number', observable: source$ }
           ]"
          [operatorDescription]="[
              'Emit values that pass the provided condition'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class FilterComponent  {
  
  source$ = range(1, 10).pipe(
    filter(number => number % 2 === 0)
  );
  
}
