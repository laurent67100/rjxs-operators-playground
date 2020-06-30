import { Component } from '@angular/core';
import { of } from 'rxjs';
import { magazineIssues } from '../../data/magazine';
import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  template:
  `<app-observable-player
          [sources]="[
              { description: 'Emit data from a remote source', observable: remoteSource$ }
           ]"
          [operatorDescription]="[
              'Create an observable for an Ajax request'
              ]"
  >
  </app-observable-player>
  `,
  styles: [
  
  ]
})
export class AjaxComponent  {
  
  remoteSource$ = ajax('http://dummy.restapiexample.com/api/v1/employees').pipe(map(res => res.response.data));
  
}
