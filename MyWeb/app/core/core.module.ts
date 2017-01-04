import {ModuleWithProviders, NgModule,
        Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { AuthService }       from './auth.service';
import { CanDeactivateGuard }  from './can-deactivate-guard.service';

@NgModule({
    imports: [CommonModule],
    providers: [AuthService , CanDeactivateGuard]
})
export class CoreModule {
}