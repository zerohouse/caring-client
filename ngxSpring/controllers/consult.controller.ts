/* tslint:disable */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiHttp} from '../api.http';

import {Consult, Page} from '../consult.model';

@Injectable()
export class ConsultController {
  constructor(private http: ApiHttp) {
  }

  deleteConsult(id: number): Observable<void> {
    return this.http.delete<void>('/api/consult', {id: id});
  }

  getConsultList(page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/list', {page: page, size: size});
  }

  getStateSearchConsult(state: string, search: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/stateSearch', {state: state, search: search, page: page, size: size});
  }

  getStateNowConsult(state: string, search: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/stateNow', {state: state, search: search, page: page, size: size});
  }

  getStateMemoConsult(state: string, search: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/stateMemo', {state: state, search: search, page: page, size: size});
  }

  getSearchConsult(search: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/search', {search: search, page: page, size: size});
  }

  getSearchCityConsult(city: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchCity', {city: city, page: page, size: size});
  }

  getSearchHoleConsult(hole: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchHole', {hole: hole, page: page, size: size});
  }

  getSearchPhoneConsult(phone: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchPhone', {phone: phone, page: page, size: size});
  }

  getSearchGiveConsult(give: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchGive', {give: give, page: page, size: size});
  }

  getSearchTakeConsult(take: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchTake', {take: take, page: page, size: size});
  }

  getSearchLevelConsult(level: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchLevel', {level: level, page: page, size: size});
  }

  getSearchNowConsult(now: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchNow', {now: now, page: page, size: size});
  }

  getSearchMemoConsult(memo: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchMemo', {memo: memo, page: page, size: size});
  }

  getSearchComeConsult(come: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchCome', {come: come, page: page, size: size});
  }

  getSearchFirstConsult(first: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchFirst', {first: first, page: page, size: size});
  }

  getSearchStartConsult(start: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchStart', {start: start, page: page, size: size});
  }

  getSearchEndConsult(end: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/searchEnd', {end: end, page: page, size: size});
  }

  getStateConsult(state: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/state', {state: state, page: page, size: size});
  }

  getProgressConsult(progress: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/progress', {progress: progress, page: page, size: size});
  }

  getProgressanytimeConsult(progress: string, page?: number, size?: number): Observable<Page<Consult>> {
    return this.http.get<Page<Consult>>('/api/consult/progressanytime', {progress: progress, page: page, size: size});
  }

  getStateListConsult(state: string): Observable<Consult[]> {
    return this.http.get<Consult[]>('/api/consult/stateList', {state: state});
  }

  getDateConsult(date: string): Observable<Consult[]> {
    return this.http.get<Consult[]>('/api/consult/date', {date: date});
  }

  getSendConsult(direct: boolean): Observable<Consult[]> {
    return this.http.get<Consult[]>('/api/consult/send', {direct: direct});
  }

  getHomepageReservation(state: string): Observable<number>{
    return this.http.get<number>('/api/consult/HRCount', {state: state});
  }

  getCsCompleteConsult(csComplete: boolean): Observable<Consult[]> {
    return this.http.get<Consult[]>('/api/consult/csComplete', {csComplete: csComplete});
  }

  getDeleteReasonConsult(reason: string): Observable<Consult[]> {
    return this.http.get<Consult[]>('/api/consult/reason', {reason: reason});
  }

  saveConsult(consult: Consult): Observable<Consult> {
    return this.http.post<Consult>('/api/consult', consult);
  }

  getSamePhoneConsult(phone: string): Observable<boolean> {
    return this.http.get<boolean>('/api/consult/SamePhone', {phone: phone});
  }
}
