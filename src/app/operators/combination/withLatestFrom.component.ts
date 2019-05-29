import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable, race, zip } from 'rxjs';
import { map, mapTo, withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-withLatestFrom',
  template:
      `<app-observable-player
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Show latest button clicked', observable: source$ }
           ]"
          [operatorDescription]="[
              'Provide the last emitted value from another observable'
              ]"
  >
    <button #btn1>Button 1</button>
    <button #btn2>Button 2</button>
    <button #btn3>Button 3</button>
    <button #btnLatest>Show Latest Clicked</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class WithLatestFromComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  @ViewChild('btn2') button2: ElementRef<any>;
  @ViewChild('btn3') button3: ElementRef<any>;
  @ViewChild('btnLatest') buttonLatest: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
    
    const buttonClicks$ = merge(
      fromEvent(this.button1.nativeElement, 'click').pipe(mapTo('Button 1 clicked')),
      fromEvent(this.button2.nativeElement, 'click').pipe(mapTo('Button 2 clicked')),
      fromEvent(this.button3.nativeElement, 'click').pipe(mapTo('Button 3 clicked'))
    );
    
    this.source$ = fromEvent(this.buttonLatest.nativeElement, 'click').pipe(
      withLatestFrom(buttonClicks$),
      map(([event, latestButtonClicked]) => latestButtonClicked)
    )
  }
}
