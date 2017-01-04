import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

//import { AuthGuard }            from '../../auth-guard';
//import { AuthService }          from '../../core/auth.service';
import { CoreModule }          from '../../core/core.module';

@NgModule({
    imports: [CommonModule, FormsModule, LoginRoutingModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [
        //AuthGuard,
        //AuthService
    ]
})

export class LoginModule { }
