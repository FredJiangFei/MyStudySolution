import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { AwesomePipe }        from './awesome.pipe';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { HighlightDirective } from './highlight.directive';
import { ContactRoutingModule } from './contact-routing.module';

//We also replaced BrowserModule by CommonModule for reasons explained in an FAQ.
//https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-browser-vs-common-module

@NgModule({
    imports: [CommonModule, FormsModule, ContactRoutingModule],
    declarations: [ContactComponent, HighlightDirective, AwesomePipe],
    exports: [ContactComponent],
    providers: [ContactService]
})

export class ContactModule { }
