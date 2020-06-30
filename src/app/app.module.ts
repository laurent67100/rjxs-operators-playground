import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablePlayerComponent } from './components/observable-player/observable-player.component';
import { OfComponent } from './operators/creation/of.component';
import { OperatorsRoutingModule } from './routing.module';
import { OperatorsComponent } from './components/operators/operators.component';
import { FromComponent } from './operators/creation/from.component';
import { IntervalComponent } from './operators/creation/interval.component';
import { RangeComponent } from './operators/creation/range.component';
import { DurationPipe } from './pipes/duration.pipe';
import { TimerComponent } from './operators/creation/timer.component';
import { FromEventComponent } from './operators/creation/fromEvent.component';
import { FilterComponent } from './operators/filtering/filter.component';
import { TakeComponent } from './operators/filtering/take.component';
import { FirstComponent } from './operators/filtering/first.component';
import { LastComponent } from './operators/filtering/last.component';
import { SkipComponent } from './operators/filtering/skip.component';
import { DebounceTimeComponent } from './operators/filtering/debounceTime.component';
import { DistinctUntilChangedComponent } from './operators/filtering/distinctUntilChanged.component';
import { TakeUntilComponent } from './operators/filtering/takeUntil.component';
import { MapComponent } from './operators/transformation/map.component';
import { PluckComponent } from './operators/transformation/pluck.component';
import { MergeMapComponent } from './operators/transformation/mergeMap.component';
import { ConcatMapComponent } from './operators/transformation/concatMap.component';
import { SwitchMapComponent } from './operators/transformation/switchMap.component';
import { ExhaustMapComponent } from './operators/transformation/ehaustMap.component';
import { CombineLatestComponent } from './operators/combination/combineLatest.component';
import { ZipComponent } from './operators/combination/zip.component';
import { RaceComponent } from './operators/combination/race.component';
import { PairwiseComponent } from './operators/combination/pairwise.component';
import { StartWithComponent } from './operators/combination/startWith.component';
import { MergeComponent } from './operators/combination/merge.component';
import { TapComponent } from './operators/utility/tap.component';
import { WithLatestFromComponent } from './operators/combination/withLatestFrom.component';
import { TimeoutComponent } from './operators/utility/timeout.component';
import { FinalizeComponent } from './operators/utility/finalize.component';
import { RepeatComponent } from './operators/utility/repeat.component';
import { RetryComponent } from './operators/error-handling/retry.component';
import { CatchErrorComponent } from './operators/error-handling/catchError.component';
import {AjaxComponent} from './operators/creation/ajax.component';
import { ForkJoinComponent } from './operators/combination/forkJoin.component';

@NgModule({
  imports:      [ BrowserModule, OperatorsRoutingModule ],
  declarations: [
    AppComponent,
    DurationPipe,
    ObservablePlayerComponent,
    OperatorsComponent,
    OfComponent,
    FromComponent,
    AjaxComponent,
    IntervalComponent,
    RangeComponent,
    TimerComponent,
    FromEventComponent,
    FilterComponent,
    TakeComponent,
    FirstComponent,
    LastComponent,
    SkipComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    TakeUntilComponent,
    MapComponent,
    PluckComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    MergeComponent,
    CombineLatestComponent,
    RaceComponent,
    ForkJoinComponent,
    ZipComponent,
    PairwiseComponent,
    StartWithComponent,
    WithLatestFromComponent,
    TapComponent,
    TimeoutComponent,
    FinalizeComponent,
    RepeatComponent,
    RetryComponent,
    CatchErrorComponent
    
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
