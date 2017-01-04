/* Angular Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }        from '@angular/forms';

/* App Component */
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home/home.component';
import { ErrorComponent }   from './error/error.component';

/* Custome Module */
import { PersonModule }   from './component/person/person.module';
import { SharedModule }   from './shared/shared.module';
import { CoreModule }   from './core/core.module';

/* Route Module */
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule, SharedModule,CoreModule,
              FormsModule, AppRoutingModule],
    declarations: [AppComponent,HomeComponent,ErrorComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

