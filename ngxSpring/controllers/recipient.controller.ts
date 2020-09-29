/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RecipientHttp} from '../recipient.http';
import {Page, Recipient} from '../recipient.model';

@Injectable()
export class RecipientController {
    constructor(private http: RecipientHttp) {
    }

    deleteRecipient(recognitionNumber: string): Observable<void> {
        return this.http.delete<void>('/api/recipient', {recognitionNumber: recognitionNumber});
    }

    getRecipient(recognitionNumber: string): Observable<Recipient> {
        return this.http.get<Recipient>('/api/recipient', {recognitionNumber: recognitionNumber});
    }

    getRecipientList(page?: number, size?: number): Observable<Page<Recipient>> {
        return this.http.get<Page<Recipient>>('/api/recipient/list', {page: page, size: size});
    }

    newRecipient(recipient: Recipient): Observable<Recipient> {
        return this.http.post<Recipient>('/api/recipient/new', recipient);
    }

    save(recipient: Recipient): Observable<Recipient> {
        return this.http.post<Recipient>('/api/recipient', recipient);
    }

    update(recognitionNumber: string): Observable<void> {
        return this.http.post<void>('/api/recipient/update', null, {recognitionNumber: recognitionNumber});
    }
}
