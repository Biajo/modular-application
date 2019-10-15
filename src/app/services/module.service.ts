import { Observable } from 'rxjs';
import { ModuleData } from './../models/module.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Compiler, Inject, ReflectiveInjector, Injector, COMPILER_OPTIONS } from '@angular/core';

import * as fs from 'bro-fs';
import { map } from 'rxjs/operators';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserAnimations from '@angular/platform-browser/animations';

declare var SystemJS: any;

declare global {
    interface Window { TEMPORARY: any; }
}

@Injectable()
export class ModuleService {
    source = `http://${window.location.host}/`;
    api = `/backend/applications/store/download`

    constructor(private compiler: Compiler, private http: HttpClient) {
        console.log(compiler);
    }

    loadModules(): Observable<ModuleData[]> {
        return this.http.get<ModuleData[]>("./assets/modules.json")
    }

    // load(): Promise<any> {
    //     let promise: Promise<any> = new Promise ((resolve: any) => {
    //         this.http.get<ModuleData[]>("./assets/modules.json").subscribe(modules => {

    //         })
    //     })

    //     return promise
    // }

    loadModule(moduleInfo: ModuleData) {
        let url = this.api;
        return this.http.post(url, {moduleParams: moduleInfo}, { responseType: 'text' }).pipe(
            map(source => {
                const exports = {}; // this will hold module exports
                const modules = {   // this is the list of modules accessible by plugins
                    '@angular/core': AngularCore,
                    '@angular/common': AngularCommon,
                    '@angular/router': AngularRouter,
                    '@angular/platform-browser/animations': BrowserAnimations,
                    '@clr/angular': AngularClarity
                };

                // shim 'require' and eval
                const require: any = (module) => modules[module];
                eval(source);

                // Need to check if there is another solution for eval as this is described as 'Evil'

                this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`])
                //console.log(exports); // disabled as this object is cleared anyway
                return exports;
            })
        )
    }

    loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
        let url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
        SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
        SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
        SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));

        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log(module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log(compiled);
                return module;
            });
        });
    }
    
}