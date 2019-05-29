import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';


@Component({
  selector: 'app-fromEvent',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Emits everytime the user clicks on a button', observable: clickSource$ },
              { description: 'Emits everytime the user hovers on a button', observable: mouseEnterSource$ }
           ]"
          [operatorDescription]="[
              'Turn an event into an observable sequence'
              ]"
  >
    <button #btn>Click Me!</button>
  </app-observable-player>
  `
})
export class FromEventComponent implements OnInit {
  @ViewChild('btn') button: ElementRef<any>;
  
  clickSource$: Observable<any>;
  mouseEnterSource$: Observable<any>;
  
  
  ngOnInit() {
    
    this.clickSource$ = fromEvent(this.button.nativeElement, 'click');
  
    this.mouseEnterSource$ = fromEvent(this.button.nativeElement, 'mouseenter');
  }

}
