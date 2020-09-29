/* tslint:disable */
import {Injectable} from '@angular/core';
import {GiverController} from './controllers/giver.controller';

@Injectable()
export class GiverService {
    constructor(public giver: GiverController) {
    }

}
