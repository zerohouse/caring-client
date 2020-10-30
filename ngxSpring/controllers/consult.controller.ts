/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiHttp} from '../api.http';
import {Page, Consult} from '../consult.model';

@Injectable()
export class ConsultController {
    constructor(private http: ApiHttp) {
    }

    deleteConsult(id: number): Observable<void> {
        return this.http.delete<void>('/api/consult', {id: id});
    }

    getConsult(id: number): Observable<Consult> {
        return this.http.get<Consult>('/api/consult', {id: id});
    }

    getSearchConsult(search: string, page?: number, size?: number): Observable<Page<Consult>> {
        return this.http.get<Page<Consult>>('/api/consult/list', {search: search, page: page, size: size});
    }

    getConsultList(page?: number, size?: number): Observable<Page<Consult>> {
        return this.http.get<Page<Consult>>('/api/consult/list', {page: page, size: size});
    }


    save(consult: Consult): Observable<Consult> {
        return this.http.post<Consult>('/api/consult', consult);
    }
}
