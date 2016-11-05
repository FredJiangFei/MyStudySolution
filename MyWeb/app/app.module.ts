import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

/* App Root */
import { AppComponent }   from './app.component';

/* Person Imports */
import { PersonModule }   from './person/person.module';

@NgModule({
    imports: [BrowserModule, HttpModule, PersonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

