import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { endWith, finalize, map, takeUntil, takeWhile } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


interface IExampleSource {
  description: string;
  observable: Observable<any>;
}

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
  
  @Input() sources: IExampleSource[];
  @Input() operatorDescription: string[];
  @Input() autoSubscribe = false;
  @Input() forceShowTimer = false;
  
  operatorCategory: string;
  operatorName: string;
  source$: Observable<any>;
  consoleLines: IConsoleLine[] = [];
  stackblitzUrl: SafeUrl;
  
  elapsedTime$: Observable<number>;
  subscribed = false;
  private _timerStopped$ = new Subject<void>();
  
  private _subscription: Subscription;
  private _componentDestroyed = new Subject<void>();
  
  
  constructor(private sanitizer: DomSanitizer, private router: Router) {
    const url = router.routerState.snapshot.url.split('/');
    this.operatorName = url[url.length - 1];
    this.operatorCategory = url[url.length - 2];
  }

  ngOnInit() {
    this.stackblitzUrl = this.createStackblitzUrl();
    console.log('url', this.stackblitzUrl)
    this.source$ = this.sources[0].observable;
    
    if (this.autoSubscribe) {
      this.onSubscribe();
    }
  }
  
  
  onSubscribe(): void {
    this.subscribed = true;
    this.startTimer();
    
    this._subscription = this.source$.pipe(
      takeUntil(this._componentDestroyed), 
      finalize(() => {
        asyncScheduler.schedule(() => {
          this.subscribed = false;
          this.stopTimer();
        });
      }),
    ).subscribe(data => {
      let dataDisplay = typeof data === 'object' ? data.constructor.name + ' - ' + JSON.stringify(data) : data;
      this.consoleLines.push({ text: dataDisplay, type: 'emission' });
    }, 
error => this.consoleLines.push({ text: error, type: 'error' }), 
() => {
      this.consoleLines.push({ text: 'Completed!', type: 'complete' });
  })
  }
  
  onUnsubscribe(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this.subscribed = false;
    this.stopTimer();
  }
  
  onClear() {
    this.consoleLines.length = 0;
    if (!this.subscribed) {
      this.elapsedTime$ = of(0);
    }
  }
  
  startTimer() {
    this.elapsedTime$ = interval(100).pipe(
      map(i => i * 100),
      takeUntil(this._timerStopped$),
    )
  }
  
  stopTimer() {
    this._timerStopped$.next();
  }
  
  ngOnDestroy() {
    this._componentDestroyed.next();
    this._componentDestroyed.complete();
  }
  
  
  private createStackblitzUrl() {
    if (!this.operatorCategory || !this.operatorName) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl([
      'https://stackblitz.com/edit/reactive-rxjs-operators-playground?embed=1',
      `&file=src/app/operators/${this.operatorCategory}/${this.operatorName}.component.ts`,
      `&hideExplorer=1&hideNavigation=1&view=editor`
    ].join(''));
  }
  
  onChange(example: string) {
    this.onUnsubscribe();
    this.onClear();
    this.source$ = this.sources.filter(s => s.description === example)[0].observable;
    if (this.autoSubscribe) {
      this.onSubscribe();
    }
  }
  
  replaceDashes(operatorCategory: string) {
    return operatorCategory.replace(/\-/g, ' ');
  }
}
