/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiHttp} from '../api.http';

import {Page, SejongMessaging} from '../consult.model';

@Injectable()
export class SejongMessagingController {
  constructor(private http: ApiHttp) {
  }

  getResultList(page?: number, size?: number, key?: string, failOnly?: boolean, date?: string): Observable<Page<SejongMessaging>> {
    return this.http.post<Page<SejongMessaging>>('/api/message/list', null, {page: page, size: size, key: key, failOnly: failOnly, date: date});
  }

  sendReceipt(message: string, yyyyMM: string, recipientIdList: any[], to?: string): Observable<void> {
    return this.http.post<void>('/api/message/sendReceipt', recipientIdList, {message: message, yyyyMM: yyyyMM, to: to});
  }

  sendTalkOrSms(message: string, to: string, encode?: string): Observable<void> {
    return this.http.post<void>('/api/message/sendTalkOrSms', encode, {message: message, to: to});
  }
}
