import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {combineLatest, forkJoin, fromEvent, merge, Observable, of, race, zip} from 'rxjs';
import {map, mapTo, take} from 'rxjs/operators';
import {magazineIssues} from '../../data/magazine';
import {ajax} from 'rxjs/ajax';


@Component({
  selector: 'app-forkJoin',
  template:
  `<app-observable-player
          [autoSubscribe]="true"
          [sources]="[
              { description: 'Emit data and completes once all observables ARE COMPLETED', observable: source$ }
           ]"
          [operatorDescription]="[
              'After all observables complete, emit values as an array'
              ]"
  >
    <button #btn1>Button 1</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class ForkJoinComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
    this.source$ = forkJoin([
      fromEvent(this.button1.nativeElement, 'click').pipe(take(1)),
      ajax('http://dummy.restapiexample.com/api/v1/employees').pipe(map(res => res.response.data))
    ]);
  }
}
