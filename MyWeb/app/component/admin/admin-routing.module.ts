import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }   from './admin.component';
import { ManageCrisesComponent }   from './manage-crises.component';
import { ManagePersonsComponent }   from './manage-persons.component';
import { AdminDashboardComponent }   from './admin-dashboard.component';

import { AuthGuard }                from '../../core/auth-guard';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
             { path: 'crises', component: ManageCrisesComponent },
             { path: 'heroes', component: ManagePersonsComponent },
             { path: '', component: AdminDashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
