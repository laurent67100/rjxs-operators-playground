import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable, race, zip } from 'rxjs';
import { map, mapTo, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-pairwise',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Emit last 2 button clicks every time a button is clicked (at least 2 buttons clicked)', observable: source$ }
           ]"
          [operatorDescription]="[
              'Emit the previous and current values as an array'
              ]"
  >
    <button #btn1>Button 1</button>
    <button #btn2>Button 2</button>
    <button #btn3>Button 3</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class PairwiseComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  @ViewChild('btn2') button2: ElementRef<any>;
  @ViewChild('btn3') button3: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
  
    this.source$ = merge(
      fromEvent(this.button1.nativeElement, 'click').pipe(mapTo('Button 1 clicked')),
      fromEvent(this.button2.nativeElement, 'click').pipe(mapTo('Button 2 clicked')),
      fromEvent(this.button3.nativeElement, 'click').pipe(mapTo('Button 3 clicked'))
    ).pipe(
      pairwise()
    );
  }
}
