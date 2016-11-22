import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { PersonComponent }   from './component/person/person.component';
import { PersonDetailComponent }   from './component/person-detail/person-detail.component';


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
