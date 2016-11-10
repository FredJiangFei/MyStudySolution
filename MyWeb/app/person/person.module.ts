import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { PersonComponent }   from './person.component';
import { PersonService }     from './person.service';
import { RouterModule }   from '@angular/router';
import { DashboardComponent }   from '../dashboard.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forRoot([
        {
            path: 'persons',
            component: PersonComponent
        }, {
            path: 'dashboard',
            component: DashboardComponent
        }
    ])],
    declarations: [PersonComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
