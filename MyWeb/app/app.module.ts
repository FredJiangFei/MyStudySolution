/* Angular Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
// import { RouterModule }   from '@angular/router';
import { FormsModule }        from '@angular/forms';

/* App Component */
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';


/* Custome Module */
import { PersonModule }   from './component/person/person.module';
//import { CrisisCenterModule }     from './component/crisis-center/crisis-center.module';

/* Route Module */
import { AppRoutingModule }     from './app-routing.module';

/* Directive */
import { HighlightDirective }  from './directive/highlight.directive';


@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule,FormsModule,AppRoutingModule],
    declarations: [AppComponent, DashboardComponent,HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }

