/* tslint:disable */
import {Injectable} from '@angular/core';
import {ConsultController} from './controllers/consult.controller';

@Injectable()
export class ConsultService {
    constructor(public consult: ConsultController) {
    }

}
