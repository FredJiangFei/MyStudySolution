import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { PersonDetailComponent }   from './component/person-detail/person-detail.component';

/* Person Imports */
import { PersonModule }   from './component/person/person.module';
import { AppRoutingModule }     from './app-routing.module';

/* Directive */
import { HighlightDirective }  from './directive/highlight.directive';

@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule,FormsModule,AppRoutingModule],
    declarations: [AppComponent, DashboardComponent,PersonDetailComponent,HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }

