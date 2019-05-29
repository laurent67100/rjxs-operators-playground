import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of, throwError } from 'rxjs';
import { delay, exhaustMap, finalize, mergeMap, retry, switchMap, tap } from 'rxjs/operators';
import { magazineIssues } from '../../data/magazine';


@Component({
  selector: 'app-retry',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [forceShowTimer]="forceShowTimer"
          [sources]="[ 
              { description: 'Retrying a failed http request after 1 second (no retry) ', observable: source$ },
              { description: 'Retrying a failed http request after 1 second (2 retries max) ', observable: sourceRetry$ }
           ]"
          [operatorDescription]="[
              'Retry an observable sequence a specific number of times should an error occur'
              ]"
  >
    <button #fetchBtn>Fetch Data</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class RetryComponent implements OnInit {
  
  @ViewChild('fetchBtn') fetchBtn: ElementRef<any>;
  forceShowTimer = false;
  source$: Observable<any>;
  sourceRetry$: Observable<any>;
  
  
  ngOnInit() {
    
    // simulate a backend search for magazines. Pass in request time.
    const backendSearchFailing = (attempts: number) => of(magazineIssues).pipe(
      tap(() => this.forceShowTimer = true),
      tap(() => console.log('Checking server...')),
      delay(1000),
      mergeMap(() => throwError(`500 Server Error ${attempts ? ' after ' + attempts + ' attempts' : ''}`)),
      finalize(() => this.forceShowTimer = false)
    );
  
    this.source$ = fromEvent(this.fetchBtn.nativeElement, 'click').pipe(
      switchMap(() => backendSearchFailing(0))
    )
  
    // use exhaustMap to ignore button click until all retries have completed
    this.sourceRetry$ = fromEvent(this.fetchBtn.nativeElement, 'click').pipe(
      exhaustMap(() => backendSearchFailing(3).pipe(
        retry(2)
      )),
    )
  }
}
