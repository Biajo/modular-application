import { BrowserModule } from '@angular/platform-browser';
import { NgModule, COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

import { ClarityModule } from '@clr/angular';

import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationService } from './services/application.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
}

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [RouterService, ModuleService, ApplicationService,
        { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
        { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
        { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
