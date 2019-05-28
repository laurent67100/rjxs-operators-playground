import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


interface IConsoleLine {
  text: string;
  type: 'emission' | 'error' | 'complete';
}

@Component({
  selector: 'app-observable-player',
  templateUrl: './observable-player.component.html',
  styleUrls: ['./observable-player.component.scss']
})
export class ObservablePlayerComponent implements OnInit, OnDestroy {
  
  @Input() source$: Observable<any>;
  
  private _subscription: Subscription;
  private _componentDestroyed = new Subject<void>();
  private completed: boolean;
  private errorMessage: string;
  
  private consoleLines: IConsoleLine[] = [];
  
  constructor() { }

  ngOnInit() {
  }
  
  
  onSubscribe(): void {
    this._subscription = this.source$.pipe(
      takeUntil(this._componentDestroyed)
    ).subscribe(data => {
      let dataDisplay = typeof data === 'object' ? JSON.stringify(data) : data;
      this.consoleLines.push({ text: dataDisplay, type: 'emission' });
    }, 
error => this.consoleLines.push({ text: error, type: 'error' }), 
() => this.consoleLines.push({ text: 'Completed!', type: 'complete' }))
  }
  
  onUnsubscribe(): void {
    this._subscription.unsubscribe();
  }
  
  onClear() {
    this.consoleLines.length = 0;
  }
  
  ngOnDestroy() {
    this._componentDestroyed.next();
    this._componentDestroyed.complete();
  }
  
  get subscribed(): boolean {
    return this._subscription && !this._subscription.closed;
  }
}
