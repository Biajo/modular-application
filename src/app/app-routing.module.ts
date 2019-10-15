import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { RouterModule, Routes, Router, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';

const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard', component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        { provide: APP_INITIALIZER, useFactory: InitRouterConfig, deps: [Injector, ModuleService], multi: true },
    ]
})
export class AppRoutingModule { }

export function InitRouterConfig(injector: Injector, moduleService: ModuleService) {
    console.log('InitRouterConfig');

    return () => Init(injector, moduleService)
}

export function Init(injector: Injector, moduleService: ModuleService) {
    console.log('Init');
    let promise: Promise<any> = new Promise((resolve: any) => {
        moduleService.loadModules().subscribe(async (res) => {
            var routerService: RouterService = injector.get(RouterService)
            var router: Router = injector.get(Router);
            await asyncForEach(res, async (item, array, index) => {
                if (item.registered) {
                    await moduleService.loadModuleSystemJS(item).then(async (exports) => {
                        await routerService.createAndRegisterRoute(item, exports);
                    }, (err) => this.showError(`${item.moduleName} could not be found, did you copy the umd file to ${item.location}?`, err));
                }
            })
            resolve(true)
        })
    })
    return promise
}

export async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}