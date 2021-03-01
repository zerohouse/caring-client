/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page, Caregiver} from "../caregiver.model";
import {ApiHttp} from "../api.http";

@Injectable()
export class CaregiverController {
    constructor(private http: ApiHttp) {
    }

    deleteCaregiver(id: number): Observable<void> {
        return this.http.delete<void>('/api/caregiver', {id: id});
    }

    getCaregiver(id: string): Observable<Caregiver> {
        return this.http.get<Caregiver>('/api/caregiver', {id: id});
    }

    getCaregiverList(page?: number, size?: number): Observable<Page<Caregiver>> {
        return this.http.get<Page<Caregiver>>('/api/caregiver/list', {page: page, size: size});
    }

    getSearchNameCaregiver(name: string, page?: number, size?: number): Observable<Page<Caregiver>> {
        return this.http.get<Page<Caregiver>>('/api/caregiver/searchName', {name: name, page: page, size: size});
    }

    getSearchNumberCaregiver(phone: string, page?: number, size?: number): Observable<Page<Caregiver>> {
        return this.http.get<Page<Caregiver>>('/api/caregiver/searchNumber', {phone: phone, page: page, size: size});
    }

    getSearchAreaCaregiver(area: string, page?: number, size?: number): Observable<Page<Caregiver>> {
        return this.http.get<Page<Caregiver>>('/api/caregiver/searchArea', {area: area, page: page, size: size});
    }

    newCaregiver(caregiver: Caregiver): Observable<Caregiver> {
        return this.http.post<Caregiver>('/api/caregiver/new', caregiver);
    }

    saveCaregiver(caregiver: Caregiver): Observable<Caregiver> {
        return this.http.post<Caregiver>('/api/caregiver', caregiver);
    }

    updateCaregiver(id: number): Observable<void> {
        return this.http.post<void>('/api/caregiver/update', null, {id: id});
    }
}
