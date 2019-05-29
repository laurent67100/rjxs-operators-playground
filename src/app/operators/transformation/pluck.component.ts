import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-pluck',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Display property of source object', observable: source$ },
              { description: 'Display nested property of source object', observable: sourceNested$ }
           ]"
          [operatorDescription]="[
              'Select properties to emit (can be nested)'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class PluckComponent  {
  
  data = [
    { name: 'Hodor', age: 50, profession: { title: 'Door Holder' } },
    { name: 'Bran the Broken', age: 20, profession: { title: 'King' } }
  ];
  
  source$ = from(this.data).pipe(
    pluck('name')
  );
  
  sourceNested$ = from(this.data).pipe(
    pluck('profession', 'title')
  );
  
}
