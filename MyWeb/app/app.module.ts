/* Angular Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }        from '@angular/forms';

/* App Component */
import { AppComponent }   from './app.component';
import { LoginComponent }   from './component/login/login.component';
import { HomeComponent }   from './home/home.component';
import { ErrorComponent }   from './error/error.component';

/* Custome Module */
import { PersonModule }   from './component/person/person.module';
import { AdminModule }   from './component/admin/admin.module';
import { LoginRoutingModule }   from './component/login/login-routing.module';
import { SharedModule }   from './shared/shared.module';
import { CoreModule }   from './core/core.module';

/* Route Module */
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule, SharedModule,CoreModule,
        FormsModule, AppRoutingModule, AdminModule, LoginRoutingModule],
    declarations: [AppComponent, LoginComponent,HomeComponent,ErrorComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

