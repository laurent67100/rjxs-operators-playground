import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, range, timer } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-takeUntil',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Emits every odd number until the button is clicked', observable: sourceClick$ }
           ]"
          [operatorDescription]="[
              'Emit values until provided observable emits'
              ]"
  >
    <button #btn>Enough!</button>
  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class TakeUntilComponent implements OnInit {
  
  @ViewChild('btn') button: ElementRef<any>;
  
  sourceClick$: Observable<any>;
  
  
  ngOnInit() {
    
    const buttonClicked$ = fromEvent(this.button.nativeElement, 'click');
    
    this.sourceClick$ = interval(1000).pipe(
      filter(n => n % 2 === 0),
      takeUntil(buttonClicked$)
    );
    
  }
}
