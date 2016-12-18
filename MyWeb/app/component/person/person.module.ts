import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { PersonComponent }   from './person.component';
import { PersonService }     from '../../person.service';
import { RouterModule }   from '@angular/router';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { HighlightDirective }   from './highlight.directive';
import { AwesomePipe }        from './awesome.pipe';

import { PersonDetailComponent }   from './person-detail.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forRoot([
        // {
        //     path: 'persons',
        //     component: PersonComponent
        // }, 
        // {
        //     path: 'dashboard',
        //     component: DashboardComponent
        // },
        {
            path: 'detail/:id',
            component: PersonDetailComponent
        }
    ])],
    declarations: [PersonComponent,HighlightDirective,AwesomePipe,PersonDetailComponent],
    exports: [PersonComponent],
    providers: [PersonService]
})

export class PersonModule { }
