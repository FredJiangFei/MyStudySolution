/* Angular Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }        from '@angular/forms';

/* App Component */
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { LoginComponent }   from './component/login/login.component';

/* Custome Module */
import { PersonModule }   from './component/person/person.module';
import { AdminModule }   from './component/admin/admin.module';
import { LoginRoutingModule }   from './component/login/login-routing.module';
import { SharedModule }   from './shared/shared.module';

/* Route Module */
import { AppRoutingModule }     from './app-routing.module';

/* Directive */
import { HighlightDirective }  from './directive/highlight.directive';


@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule, SharedModule,
        FormsModule, AppRoutingModule, AdminModule, LoginRoutingModule],
    declarations: [AppComponent, DashboardComponent, HighlightDirective, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

