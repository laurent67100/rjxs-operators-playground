import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-combineLatest',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Display latest button clicks count from all buttons', observable: source$ }
           ]"
          [operatorDescription]="[
              'When any observable emits a value, emit the latest value from each'
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
export class CombineLatestComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  @ViewChild('btn2') button2: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
  
    let button1Count = 0, button2Count = 0;
    
    this.source$ = combineLatest([
      fromEvent(this.button1.nativeElement, 'click').pipe(map(() => ++button1Count)),
      fromEvent(this.button2.nativeElement, 'click').pipe(map(() => ++button2Count))
    ]).pipe(
      map(([button1ClickCount, button2ClickCount]) => `Click count: ${button1ClickCount} - ${button2ClickCount}`)
    );
  }
}
