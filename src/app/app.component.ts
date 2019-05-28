import { Component } from '@angular/core';

interface OperatorCategory {
  name: string;
  operators: string[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  currentOperator: string;

  categories: OperatorCategory[] = [
    {
      name: 'Creation',
      operators: ['of', 'from', 'fromEvent']
    },
     {
      name: 'Utility',
      operators: ['tap', 'from', 'fromEvent']
    }
  ];

}
