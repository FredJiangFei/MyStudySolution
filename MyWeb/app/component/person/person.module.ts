import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { PersonComponent }   from './person.component';
import { PersonService }     from './person.service';
import { RouterModule }   from '@angular/router';
import { HighlightDirective }   from './highlight.directive';
import { AwesomePipe }        from './awesome.pipe';

import { PersonDetailComponent }   from './person-detail.component';

import { PersonRoutingModule } from './person-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, PersonRoutingModule],
    declarations: [PersonComponent,HighlightDirective,AwesomePipe,PersonDetailComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
