import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ErrorComponent }   from './error/error.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';


const routes: Routes = [
    {   
      path: 'admin',
      loadChildren: 'app/component/admin/admin.module#AdminModule'
     },
     {   
      path: 'login',
      loadChildren: 'app/component/login/login.module#LoginModule'
     },
     { path: '', component: HomeComponent },
     { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {}
