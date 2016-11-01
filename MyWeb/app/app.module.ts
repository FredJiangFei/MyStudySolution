import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

/* App Root */
import { AppComponent }   from './app.component';
import { PersonService }   from './person.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PersonService]
})
export class AppModule { }

