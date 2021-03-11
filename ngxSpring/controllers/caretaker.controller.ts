/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page, Caretaker} from "../caretaker.model";
import {ApiHttp} from "../api.http";

@Injectable()
export class CaretakerController {
    constructor(private http: ApiHttp) {
    }

    deleteCaretaker(id: number): Observable<void> {
        return this.http.delete<void>('/api/caretaker', {id: id});
    }

    getCaretaker(id: string): Observable<Caretaker> {
        return this.http.get<Caretaker>('/api/caretaker', {id: id});
    }

    getCaretakerList(page?: number, size?: number): Observable<Page<Caretaker>> {
        return this.http.get<Page<Caretaker>>('/api/caretaker/list', {page: page, size: size});
    }

    getSearchCaretaker(search: string, page?: number, size?: number): Observable<Page<Caretaker>> {
        return this.http.get<Page<Caretaker>>('/api/caretaker/search', {search: search, page: page, size: size});
    }

    getSearchNumberCaretaker(phone: string, page?: number, size?: number): Observable<Page<Caretaker>> {
        return this.http.get<Page<Caretaker>>('/api/caretaker/searchNumber', {phone: phone, page: page, size: size});
    }

    getSearchAreaCaretaker(area: string, page?: number, size?: number): Observable<Page<Caretaker>> {
        return this.http.get<Page<Caretaker>>('/api/caretaker/searchArea', {area: area, page: page, size: size});
    }

    newCaretaker(caretaker: Caretaker): Observable<Caretaker> {
        return this.http.post<Caretaker>('/api/caretaker/new', caretaker);
    }

    saveCaretaker(caretaker: Caretaker): Observable<Caretaker> {
        return this.http.post<Caretaker>('/api/caretaker', caretaker);
    }

    updateCaretaker(id: number): Observable<void> {
        return this.http.post<void>('/api/caretaker/update', null, {id: id});
    }
}
