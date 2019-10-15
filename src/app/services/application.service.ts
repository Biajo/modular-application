import { HttpClient } from '@angular/common/http';
import { ModuleData } from './../models/module.model';
import { Router, Route } from '@angular/router';
import { Injectable, Compiler } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ApplicationService {

    constructor(private http: HttpClient) { 

    }

    public getApplications(): Observable<ModuleData[]> {
        return this.http.get<ModuleData[]>('/backend/applications/store');
    }

}