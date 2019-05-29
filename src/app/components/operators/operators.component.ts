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
      operators: ['of', 'from', 'interval', 'range', 'timer', 'fromEvent' ]
    },
    {
      name: 'Filtering',
      operators: ['filter', 'take', 'first', 'last', 'skip', 'distinctUntilChanged', 'debounceTime', 'takeUntil' ]
    },
    {
      name: 'Transformation',
      operators: ['map', 'pluck', 'mergeMap', 'concatMap', 'switchMap', 'exhaustMap']
    },
    {
      name: 'Combination',
      operators: ['merge', 'combineLatest', 'race', 'zip', 'pairwise', 'startWith', 'withLatestFrom']
    },
    {
      name: 'Utility',
      operators: ['tap', 'timeout', 'finalize', 'repeat', 'retry']
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
