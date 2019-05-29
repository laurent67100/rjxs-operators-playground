import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  template:
  `<app-observable-player 
          [sources]="[ 
              { description: 'Maps an object to a string value', observable: source$ }
           ]"
          [operatorDescription]="[
              'Transform source value into another value'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class MapComponent  {
  
  source$ = of(
    { name: 'Hodor', age: 50 },
    { name: 'Bran the Broken', age: 20 },
  ).pipe(
    map(person => `${person.name} is ${person.age} yo`),
  );
  
}
