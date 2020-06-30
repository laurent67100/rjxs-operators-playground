import { Component } from '@angular/core';
import {from, of} from 'rxjs';
import { magazineIssues } from '../../data/magazine';
import {ajax} from 'rxjs/ajax';
import {filter, map, mergeAll, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  template:
  `<app-observable-player
          [sources]="[
              { description: 'Emit data from a remote source', observable: remoteSource$ },
               { description: 'Emit data from a remote source (as as stream of items)', observable: remoteSourceFlattened$ },
               { description: 'Emit data from a remote source (as as filtered stream of items)', observable: remoteSourceFlattenedFiltered$ }
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
  
  remoteSource$ = ajax('http://dummy.restapiexample.com/api/v1/employees').pipe(
    map(res => res.response.data)
  );
  
  remoteSourceFlattened$ = this.remoteSource$.pipe(
    mergeAll()
  );
  
  remoteSourceFlattenedFiltered$ = this.remoteSourceFlattened$.pipe(
    filter((employee: any) => Number(employee.employee_age) > 50)
  );
}
