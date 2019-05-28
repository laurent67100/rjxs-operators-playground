import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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
  @Input() operatorCategory;
  @Input() operatorName;
  
  
  private _subscription: Subscription;
  private _componentDestroyed = new Subject<void>();
  
  consoleLines: IConsoleLine[] = [];
  stackblitzUrl: SafeUrl;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.stackblitzUrl = this.createStackblitzUrl();
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
  
  
  private createStackblitzUrl() {
    if (!this.operatorCategory || !this.operatorName) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl([
      'https://stackblitz.com/edit/angular-dwza1y?embed=1',
      `&file=src/app/operators/${this.operatorCategory}/${this.operatorName}/${this.operatorName}.component.ts`,
      `&hideExplorer=1&hideNavigation=1&view=editor`
    ].join(''));
  }
}
