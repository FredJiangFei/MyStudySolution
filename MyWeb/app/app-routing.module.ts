import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { PersonComponent }   from './person/person.component';
import { PersonDetailComponent }   from './person-detail/person-detail.component';


const routes: Routes = [
    {path: '',redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'persons',component: PersonComponent}, 
    {path: 'dashboard',component: DashboardComponent}, 
    {path: 'detail/:id',component: PersonDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
