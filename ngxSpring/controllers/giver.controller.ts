/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
//import {GiverHttp} from '../giver.http';
import {Page, Giver} from "../giver.model";
import {ApiHttp} from "../api.http";

@Injectable()
export class GiverController {
    constructor(private http: ApiHttp) {
    }

    deleteGiver(certificateNumber1: string): Observable<void> {
        return this.http.delete<void>('/api/giver', {certificateNumber1: certificateNumber1});
    }

    getGiver(certificateNumber1: string): Observable<Giver> {
        return this.http.get<Giver>('/api/giver', {certificateNumber1: certificateNumber1});
    }

    getGiverList(page?: number, size?: number): Observable<Page<Giver>> {
        return this.http.get<Page<Giver>>('/api/giver/list', {page: page, size: size});
    }

    newGiver(giver: Giver): Observable<Giver> {
        return this.http.post<Giver>('/api/giver/new', giver);
    }

    save(giver: Giver): Observable<Giver> {
        return this.http.post<Giver>('/api/giver', giver);
    }

    update(certificateNumber1: string): Observable<void> {
        return this.http.post<void>('/api/giver/update', null, {certificateNumber1: certificateNumber1});
    }
}
