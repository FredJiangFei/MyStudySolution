import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { PersonComponent }   from './person.component';
import { PersonService }     from './person.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [PersonComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
