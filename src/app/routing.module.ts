import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfComponent } from './operators/creation/of/of.component';
import { APP_BASE_HREF } from '@angular/common';
import { OperatorsComponent } from './components/operators/operators.component';

const routes: Routes = [
  
  
  { path: '', redirectTo: '/operators', pathMatch: 'full' },
  { path: 'operators', component: OperatorsComponent, children: [
      
    ]},
  { path: 'operators/creation/of', component: OfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class OperatorsRoutingModule { }
