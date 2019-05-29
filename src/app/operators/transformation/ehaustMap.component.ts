import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, merge, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mapTo, mergeMap, switchMap, take, mergeAll } from 'rxjs/operators';
import { magazineIssues, MagazineName } from '../../data/magazine';


@Component({
  selector: 'app-exhaustMap',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Get first 2 magazines issues of year 2018 only for last button clicked', observable: source$ }
           ]"
          [operatorDescription]="[
              'Maps to a new inner observable',
              'Ignores other values until the inner observable completes'
              ]"
  >
    <button #ngNewsBtn>'Ng News' issues</button>
    <button #hodorMagBtn>'Hodor Mag' issues</button>
    <button #androidNewsBtn>'Android News' issues</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class ExhaustMapComponent implements OnInit {
  
  @ViewChild('ngNewsBtn') ngNewsBtn: ElementRef<any>;
  @ViewChild('hodorMagBtn') hodorMagBtn: ElementRef<any>;
  @ViewChild('androidNewsBtn') androidNewsBtn: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
  
    // simulate a backend search for magazine name with a 1.5sec delay. Take first 2 issues of 2018
    const backendSearch = (magazineName?: string) => of(magazineIssues).pipe(
      mergeAll(),
      filter(issue => issue.name === magazineName && issue.year === 2018),
      take(2),
      delay(1500)
    );
  
    this.source$ = merge(
      fromEvent(this.ngNewsBtn.nativeElement, 'click').pipe(mapTo(MagazineName.NgNews)),
      fromEvent(this.hodorMagBtn.nativeElement, 'click').pipe(mapTo(MagazineName.HodorMag)),
      fromEvent(this.androidNewsBtn.nativeElement, 'click').pipe(mapTo(MagazineName.AndroidNews))
    ).pipe(
      exhaustMap(magazineName => backendSearch(magazineName))
    )
  }
}
