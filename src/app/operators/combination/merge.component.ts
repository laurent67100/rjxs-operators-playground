import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-merge',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Display clicks from any button', observable: source$ }
           ]"
          [operatorDescription]="[
              'Turn multiple observables into a single observable'
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
export class MergeComponent implements OnInit {
  
  @ViewChild('btn1') button1: ElementRef<any>;
  @ViewChild('btn2') button2: ElementRef<any>;
  
  source$: Observable<any>;
  
  
  ngOnInit() {
  
    this.source$ = merge(
      fromEvent(this.button1.nativeElement, 'click').pipe(mapTo('Button 1 clicked')),
      fromEvent(this.button2.nativeElement, 'click').pipe(mapTo('Button 2 clicked'))
    );
  }
}
