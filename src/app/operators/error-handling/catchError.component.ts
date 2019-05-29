import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of, throwError } from 'rxjs';
import { catchError, delay, exhaustMap, finalize, mergeMap, retry, switchMap, tap } from 'rxjs/operators';
import { magazineIssues } from '../../data/magazine';


@Component({
  selector: 'app-catchError',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [forceShowTimer]="forceShowTimer"
          [sources]="[ 
              { description: 'Http Request failure with no error handling', observable: source$ },
              { description: 'Http Request failure with error handling', observable: sourceHandling$ }
           ]"
          [operatorDescription]="[
              'Gracefully handle errors in an observable sequence'
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
export class CatchErrorComponent implements OnInit {
  
  @ViewChild('fetchBtn') fetchBtn: ElementRef<any>;
  forceShowTimer = false;
  source$: Observable<any>;
  sourceHandling$: Observable<any>;
  
  
  ngOnInit() {
    
    // simulate a backend search for magazines. Pass in request time.
    const backendSearchFailing = () => of(magazineIssues).pipe(
      tap(() => this.forceShowTimer = true),
      tap(() => console.log('Checking server...')),
      delay(1000),
      mergeMap(() => throwError(`500 Server Error`)),
      finalize(() => this.forceShowTimer = false)
    );
  
    this.source$ = fromEvent(this.fetchBtn.nativeElement, 'click').pipe(
      switchMap(() => backendSearchFailing())
    );
  
    // use exhaustMap to ignore button click until all retries have completed
    this.sourceHandling$ = this.source$.pipe(
      catchError(err => of('An error has occurred. Please try again later.'))
    )
  }
}
