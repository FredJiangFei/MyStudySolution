import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises.component';
import { ManagePersonsComponent }    from './manage-persons.component';
import { AdminRoutingModule }       from './admin-routing.module';

import { AuthGuard }                from '../../auth-guard';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManagePersonsComponent
    ],
    providers:[
        AuthGuard
    ]
})
export class AdminModule { }
 