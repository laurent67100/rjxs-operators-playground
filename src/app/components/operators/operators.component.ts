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
      operators: ['of', 'from', 'fromEvent']
    },
    {
      name: 'Utility',
      operators: ['tap', 'from', 'fromEvent']
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
