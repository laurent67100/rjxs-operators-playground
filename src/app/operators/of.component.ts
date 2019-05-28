import { Component } from '@angular/core';
import { of } from 'rxjs';
import { magazines } from '../data/magazine';

interface OperatorCategory {
  name: string;
  operators: string[];
}

@Component({
  selector: 'app-of',
  template:
  `<app-observable-player [source$]="source$"></app-observable-player>
  `,
  styles: [
    
  ]
})
export class OfComponent  {
  
  source$ = of(magazines[0], magazines[1], magazines[2]);
}
