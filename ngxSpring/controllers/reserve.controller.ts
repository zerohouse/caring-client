/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiHttp} from '../api.http';

import {Page, Reserve} from '../api.model';

@Injectable()
export class ReserveController {
  constructor(private http: ApiHttp) {
  }

  deleteReserve(id: number): Observable<void> {
    return this.http.delete<void>('/api/reserve', {id: id});
  }

  getReserve(id: number): Observable<Reserve> {
    return this.http.get<Reserve>('/api/reserve', {id: id});
  }

  getReserveList(page?: number, size?: number): Observable<Page<Reserve>> {
    return this.http.get<Page<Reserve>>('/api/reserve/list', {page: page, size: size});
  }

  newReserve(reserve: Reserve): Observable<Reserve> {
    return this.http.post<Reserve>('/api/reserve/new', reserve);
  }

  save(reserve: Reserve): Observable<Reserve> {
    return this.http.post<Reserve>('/api/reserve', reserve);
  }

  updateMemo(reserve: Reserve): Observable<void> {
    return this.http.put<void>('/api/reserve/updateMemo', null, reserve);
  }
}
