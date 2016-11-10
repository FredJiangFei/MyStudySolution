import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

/* App Root */
import { AppComponent }   from './app.component';
import { PersonComponent }   from './person/person.component';
import { DashboardComponent }   from './dashboard.component';
import { PersonDetailComponent }   from './person-detail/person-detail.component';

/* Person Imports */
import { PersonModule }   from './person/person.module';

@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule,
                RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'persons',
                        component: PersonComponent
                    }, {
                        path: 'dashboard',
                        component: DashboardComponent
                    },{
                        path: 'detail/:id',
                        component: PersonDetailComponent
                    }
                ])],
    declarations: [AppComponent, DashboardComponent, PersonDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

