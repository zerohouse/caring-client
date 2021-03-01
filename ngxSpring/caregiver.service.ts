/* tslint:disable */
import {Injectable} from '@angular/core';
import {CaregiverController} from './controllers/caregiver.controller';

@Injectable()
export class CaregiverService {
    constructor(public caregiver: CaregiverController) {
    }

}
