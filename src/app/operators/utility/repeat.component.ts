import { Component, ElementRef, HostBinding, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, finalize, mergeMap, repeat, takeUntil, tap } from 'rxjs/operators';


@Component({
  selector: 'app-repeat',
  template:
  `<app-observable-player 
          [autoSubscribe]="true"
          [sources]="[ 
              { description: 'Log when when the user is dragging (no-repeat)', observable: source$ },
              { description: 'Log when when the user is dragging (repeat)', observable: sourceRepeat$ }
           ]"
          [operatorDescription]="[
              'Repeats an observable on completion'
              ]"
  >
    <div #dragZone class="drag-zone"></div>
  </app-observable-player>
  `,
  styles: [`
    .drag-zone {
      height: 50px;
      width: 100%; 
    }
    .dragging  .projected-content {
        box-shadow: inset 0px 0px 4px 0px #a5a5a5;
        background-color: #DADADA !important;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class RepeatComponent implements OnInit {
  @ViewChild('dragZone') dragZone: ElementRef<any>;
  
  @HostBinding('class.dragging')
  private _isDragging = false;
  
  source$: Observable<any>;
  sourceRepeat$: Observable<any>;
  
  
  ngOnInit() {
  
    const mouseDown$ = fromEvent(this.dragZone.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent(this.dragZone.nativeElement, 'mouseup');
    const mouseMove$ = fromEvent(this.dragZone.nativeElement, 'mousemove').pipe(debounceTime(50));
  
    const dragging$ = mouseDown$.pipe(
      mergeMap(() => mouseMove$),
      tap(console.log),
      tap(() => this._isDragging = true),
      takeUntil(mouseUp$),
      finalize(() => this._isDragging = false)
    );
    
    this.source$ = dragging$;
  
    this.sourceRepeat$ = this.source$.pipe(
      repeat()
    );
  }
}
