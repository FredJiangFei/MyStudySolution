import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HighlightDirective }   from './highlight.directive';
import { PersonComponent }   from './person.component';
import { PersonService }     from './person.service';
import { PersonDetailComponent }   from './person-detail.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, PersonRoutingModule],
    declarations: [PersonComponent,HighlightDirective,PersonDetailComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
