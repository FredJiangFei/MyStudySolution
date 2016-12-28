﻿import {ModuleWithProviders, NgModule,
        Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { AuthService }       from './auth.service';

@NgModule({
    imports: [CommonModule],
   // declarations: [TitleComponent],
   // exports: [TitleComponent],
    providers: [AuthService]
})
export class CoreModule {
}