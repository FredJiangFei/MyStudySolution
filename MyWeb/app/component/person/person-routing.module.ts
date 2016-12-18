import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonDetailComponent }   from './person-detail.component';
const routes: Routes = [
  // {
        //     path: 'persons',
        //     component: PersonComponent
        // }, 
        // {
        //     path: 'dashboard',
        //     component: DashboardComponent
        // },
      {
            path: 'detail/:id',
            component: PersonDetailComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PersonRoutingModule {}
