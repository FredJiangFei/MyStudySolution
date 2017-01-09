import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent }   from './person.component';
import { PersonDetailComponent }   from './person-detail.component';
import { CanDeactivateGuard }    from '../../core/can-deactivate-guard.service';

const routes: Routes = [
      {
            path: 'persons',
            component: PersonComponent
      }, 
      {
            path: 'persons/:id', 
            component: PersonDetailComponent,
            canDeactivate: [CanDeactivateGuard]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PersonRoutingModule {}
