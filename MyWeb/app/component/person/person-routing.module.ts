import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent }   from './person.component';
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
      {path: 'persons',component: PersonComponent}, 
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
