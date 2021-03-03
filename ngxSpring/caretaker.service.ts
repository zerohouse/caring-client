/* tslint:disable */
import {Injectable} from '@angular/core';
import {CaretakerController} from './controllers/caretaker.controller';

@Injectable()
export class CaretakerService {
    constructor(public caretaker: CaretakerController) {
    }

}
