/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
//import {RecipientHttp} from '../recipient.http';
import {Page, Recipient} from '../recipient.model';
import {ApiHttp} from "../api.http";

@Injectable()
export class RecipientController {
    constructor(private http: ApiHttp) {
    }

    deleteRecipient(recognitionNumber: string): Observable<void> {
        return this.http.delete<void>('/api/recipient/list', {recognitionNumber: recognitionNumber});
    }

    getRecipient(id: number): Observable<Recipient> {
        return this.http.get<Recipient>('/api/recipient/list', {id: id});
    }

    getRecipientList(page?: number, size?: number): Observable<Page<Recipient>> {
        return this.http.get<Page<Recipient>>('/api/recipient/list', {page: page, size: size});
    }

    getList(): Observable<Recipient[]> {
        return this.http.get<Recipient[]>('/api/recipient/list');
    }

    newRecipient(recipient: Recipient): Observable<Recipient> {
        return this.http.post<Recipient>('/api/recipient/new', recipient);
    }

    save(recipient: Recipient): Observable<Recipient> {
        return this.http.post<Recipient>('/api/recipient', recipient);
    }
}
