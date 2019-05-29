import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, range } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';


@Component({
  selector: 'app-debounceTime',
  template:
  `<app-observable-player
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'No debouncing on keyboard input', observable: sourceNoDebounce$ },
              { description: '500ms debouncing on keyboard input', observable: sourceDebounce$ }
           ]"
          [operatorDescription]="[
              'Discards emitted values that take less than the specified time between output'
              ]"
  >
    <input #input type="text">

  </app-observable-player>
  `,
  styles: [
     
  ]
})
export class DebounceTimeComponent implements OnInit {
  @ViewChild('input') input: ElementRef<any>;
  
  sourceNoDebounce$: Observable<any>;
  sourceDebounce$: Observable<any>;
  
  ngOnInit() {
    
    this.sourceNoDebounce$ = fromEvent(this.input.nativeElement, 'keyup');
    
    this.sourceDebounce$ = this.sourceNoDebounce$.pipe(
      debounceTime(500)
    );
    
  }
  
}
