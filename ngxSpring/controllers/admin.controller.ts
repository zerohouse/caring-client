/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {adminHttp} from '../admin.http';

import {Admin} from '../admin.model';

@Injectable()
export class AdminController {
    constructor(private http: adminHttp) {
    }

    deleteReserve(id: number): Observable<void> {
        return this.http.delete<void>('/api/reserve', {id: id});
    }

    getReserve(id: number): Observable<Admin> {
        return this.http.get<Admin>('/api/reserve', {id: id});
    }

    getReserveList(page?: number, size?: number): Observable<Admin> {
        return this.http.get<Admin>('/api/reserve/list', {page: page, size: size});
    }

    newReserve(reserve: Admin): Observable<Admin> {
        return this.http.post<Admin>('/api/reserve/new', reserve);
    }

    save(reserve: Admin): Observable<Admin> {
        return this.http.post<Admin>('/api/reserve', reserve);
    }

    updateMemo(id: number, memo: string): Observable<void> {
        return this.http.post<void>('/api/reserve/updateMemo', null, {id: id, memo: memo});
    }
}
