import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, merge, Observable, of } from 'rxjs';
import { delay, exhaustMap, filter, mapTo, timeout, mergeAll } from 'rxjs/operators';
import { magazineIssues } from '../../data/magazine';


@Component({
  selector: 'app-timeout',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Timeout on server request exceeding timeout duration', observable: source$ }
           ]"
          [operatorDescription]="[
              'Error if no value is emitted before specified duration'
              ]"
  >
    <button #allBtn>All Magazine issues</button>
    <button #allDelayBtn>All Magazine issues (5secs request)</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class TimeoutComponent implements OnInit {
  
  @ViewChild('allBtn') allBtn: ElementRef<any>;
  @ViewChild('allDelayBtn') allDelayBtn: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
    
    // simulate a backend search for magazines. Pass in request time.
    const backendSearch = (delayMs: number) => of(magazineIssues).pipe(
      mergeAll(),
      delay(delayMs),
      timeout(1500)
    );

  
    this.source$ = merge(
      fromEvent(this.allBtn.nativeElement, 'click').pipe(mapTo(0)),
      fromEvent(this.allDelayBtn.nativeElement, 'click').pipe(mapTo(5000)),
    ).pipe(
      exhaustMap(delayMs => backendSearch(delayMs))
    )
  }
}
