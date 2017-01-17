import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }         from './highlight.directive';
import {SpyDirective} from "../spy/spy.directive";


@NgModule({
    imports: [CommonModule],
    declarations: [AwesomePipe,HighlightDirective,SpyDirective],
    exports: [AwesomePipe,HighlightDirective,SpyDirective,CommonModule, FormsModule]
})
export class SharedModule { }
