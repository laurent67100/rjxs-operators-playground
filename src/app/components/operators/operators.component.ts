import { Component, OnInit } from '@angular/core';


interface OperatorCategory {
  name: string;
  operators: string[];
}


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  
  categories: OperatorCategory[] = [
    {
      name: 'Creation',
      operators: ['of', 'from', 'ajax', 'interval', 'timer', 'fromEvent' ]
    },
    {
      name: 'Filtering',
      operators: ['filter', 'take', 'skip', 'distinctUntilChanged', 'debounceTime', 'takeUntil' ]
    },
    {
      name: 'Transformation',
      operators: ['map', 'mergeMap', 'concatMap', 'switchMap', 'exhaustMap']
    },
    {
      name: 'Combination',
      operators: ['merge', 'combineLatest', 'forkJoin', 'zip', 'race', 'pairwise', 'startWith', 'withLatestFrom']
    },
    {
      name: 'Utility',
      operators: ['tap', 'timeout', 'finalize', 'repeat']
    },
    {
      name: 'Error Handling',
      operators: ['retry', 'catchError']
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  replaceSpaces(str: string) : string {
    return str.replace(/\s/g, '-');
  }
  
}
