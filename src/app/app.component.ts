import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    existingRoutes$: Observable<Route[]>;

    errorMessage: string;
    errorVisible = false;
    loading = false;

    title = 'modular-application';
    constructor(
        private routerService: RouterService
    ) {
        this.existingRoutes$ = this.routerService.existingRoutes;
    }

}
