/* tslint:disable */
import {Injectable} from '@angular/core';
import {ReserveController} from './controllers/reserve.controller';

@Injectable()
export class ApiService {
  constructor(public reserve: ReserveController) {
  }

}
