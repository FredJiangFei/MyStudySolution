import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { PersonComponent }   from './person.component';
import { PersonService }     from './person.service';
import { PersonDetailComponent }   from './person-detail.component';
import { PersonRoutingModule } from './person-routing.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [CommonModule, FormsModule, PersonRoutingModule,SharedModule],
    declarations: [PersonComponent,PersonDetailComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
