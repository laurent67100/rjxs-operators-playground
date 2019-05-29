import { Component } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { finalize, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-finalize',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Display a final message after source completes', observable: source$ },
              { description: 'Display a final message after source errors', observable: sourceError$ }
           ]"
          [operatorDescription]="[
              'Call a function when observable completes or errors'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
    
  ]
})
export class FinalizeComponent {
  
  source$ = interval(200).pipe(
    take(5),
    finalize(() => console.log('Done!'))
  );
  
  sourceError$ = this.source$.pipe(
    mergeMap(n => n < 2 ? of(n) : throwError('Number is too high'))
  )
}
