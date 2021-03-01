/* tslint:disable */
import {Injectable} from '@angular/core';
import {ConsultController} from './controllers/consult.controller';
import {ReserveController} from './controllers/reserve.controller';

@Injectable()
export class ApiService {
  constructor(public reserve: ReserveController) {
  }

}
