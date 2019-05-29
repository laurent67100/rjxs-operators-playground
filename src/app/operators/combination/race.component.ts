import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable, race } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-race',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Display clicks from the button clicked first only', observable: source$ }
           ]"
          [operatorDescription]="[
              'The observable to emit first is used'
              ]"
  >
    <button #btn1>Button 1</button>
    <button #btn2>Button 2</button>
  </app-observable-player>
  `,
  styles: [`
    :host button:not(:first-child) {
        margin-left: 20px;
    }
  `]
})
export class RaceComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  @ViewChild('btn2') button2: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
  
    this.source$ = race(
      fromEvent(this.button1.nativeElement, 'click').pipe(mapTo('Button 1 clicked')),
      fromEvent(this.button2.nativeElement, 'click').pipe(mapTo('Button 2 clicked'))
    );
  }
}
