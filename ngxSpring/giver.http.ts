/* tslint:disable */
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {Observable} from 'rxjs';

@Injectable()
export class GiverHttp {
    constructor(private http: HttpClient, @Inject(APP_BASE_HREF) @Optional() private readonly origin: string) {
        if (!origin)
            this.origin = '';
    }

    put<T>(url, body?, queryParams?, type?): Observable<T> {
        return this.http.put<T>(this.origin + url, body, {params: this.valid(queryParams), responseType: type});
    }

    delete<T>(url, queryParams?, type?): Observable<T> {
        return this.http.delete<T>(this.origin + url, {params: this.valid(queryParams), responseType: type});
    }

    post<T>(url, body?, queryParams?, type?): Observable<T> {
        return this.http.post<T>(this.origin + url, body, {params: this.valid(queryParams), responseType: type});
    }

    get<T>(url, queryParams?, type?): Observable<T> {
        return this.http.get<T>(this.origin + url, {params: this.valid(queryParams), responseType: type});
    }

    private valid(queryParams) {
        if (queryParams === null || queryParams === undefined)
            return null;
        Object.keys(queryParams).forEach(value => {
            if (queryParams[value] === null || queryParams[value] === undefined)
                delete  queryParams[value];
        });
        return queryParams;
    }
}
