import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfComponent } from './operators/creation/of/of.component';
import { APP_BASE_HREF } from '@angular/common';
import { OperatorsComponent } from './components/operators/operators.component';
import { FromComponent } from './operators/creation/from/from.component';
import { IntervalComponent } from './operators/creation/interval/interval.component';
import { RangeComponent } from './operators/creation/range/range.component';
import { TimerComponent } from './operators/creation/timer/timer.component';
import { FromEventComponent } from './operators/creation/fromEvent/fromEvent.component';
import { TakeUntilComponent } from './operators/filtering/takeUntil.component';
import { DistinctUntilChangedComponent } from './operators/filtering/distinctUntilChanged.component';
import { DebounceTimeComponent } from './operators/filtering/debounceTime.component';
import { SkipComponent } from './operators/filtering/skip.component';
import { LastComponent } from './operators/filtering/last.component';
import { FirstComponent } from './operators/filtering/first.component';
import { FilterComponent } from './operators/filtering/filter.component';
import { TakeComponent } from './operators/filtering/take.component';
import { MapComponent } from './operators/transformation/map.component';
import { PluckComponent } from './operators/transformation/pluck.component';
import { MergeMapComponent } from './operators/transformation/mergeMap.component';
import { ConcatMapComponent } from './operators/transformation/concatMap.component';
import { SwitchMapComponent } from './operators/transformation/switchMap.component';
import { ExhaustMapComponent } from './operators/transformation/ehaustMap.component';
import { MergeComponent } from './operators/combination/merge.component';
import { CombineLatestComponent } from './operators/combination/combineLatest.component';
import { RaceComponent } from './operators/combination/race.component';
import { ZipComponent } from './operators/combination/zip.component';
import { PairwiseComponent } from './operators/combination/pairwise.component';
import { StartWithComponent } from './operators/combination/startWith.component';
import { TapComponent } from './operators/utility/tap.component';
import { WithLatestFromComponent } from './operators/combination/withLatestFrom.component';
import { TimeoutComponent } from './operators/utility/timeout.component';
import { FinalizeComponent } from './operators/utility/finalize.component';
import { RepeatComponent } from './operators/utility/repeat.component';
import { RetryComponent } from './operators/errorHandling/retry.component';

const routes: Routes = [
  
  
  { path: '', redirectTo: '/operators', pathMatch: 'full' },
  { path: 'operators', component: OperatorsComponent },
  { path: 'operators/creation/of', component: OfComponent },
  { path: 'operators/creation/from', component: FromComponent },
  { path: 'operators/creation/interval', component: IntervalComponent },
  { path: 'operators/creation/range', component: RangeComponent },
  { path: 'operators/creation/timer', component: TimerComponent },
  { path: 'operators/creation/fromEvent', component: FromEventComponent },
  { path: 'operators/filtering/filter', component: FilterComponent },
  { path: 'operators/filtering/take', component: TakeComponent },
  { path: 'operators/filtering/first', component: FirstComponent },
  { path: 'operators/filtering/last', component: LastComponent },
  { path: 'operators/filtering/skip', component: SkipComponent },
  { path: 'operators/filtering/debounceTime', component: DebounceTimeComponent },
  { path: 'operators/filtering/distinctUntilChanged', component: DistinctUntilChangedComponent },
  { path: 'operators/filtering/takeUntil', component: TakeUntilComponent },
  { path: 'operators/transformation/map', component: MapComponent },
  { path: 'operators/transformation/pluck', component: PluckComponent },
  { path: 'operators/transformation/mergeMap', component: MergeMapComponent },
  { path: 'operators/transformation/concatMap', component: ConcatMapComponent },
  { path: 'operators/transformation/switchMap', component: SwitchMapComponent },
  { path: 'operators/transformation/exhaustMap', component: ExhaustMapComponent },
  { path: 'operators/combination/merge', component: MergeComponent },
  { path: 'operators/combination/combineLatest', component: CombineLatestComponent },
  { path: 'operators/combination/race', component: RaceComponent },
  { path: 'operators/combination/zip', component: ZipComponent },
  { path: 'operators/combination/pairwise', component: PairwiseComponent },
  { path: 'operators/combination/startWith', component: StartWithComponent },
  { path: 'operators/combination/withLatestFrom', component: WithLatestFromComponent },
  { path: 'operators/utility/tap', component: TapComponent },
  { path: 'operators/utility/timeout', component: TimeoutComponent },
  { path: 'operators/utility/finalize', component: FinalizeComponent },
  { path: 'operators/utility/repeat', component: RepeatComponent },
  { path: 'operators/error-handling/retry', component: RetryComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class OperatorsRoutingModule { }
