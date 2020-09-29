/* tslint:disable */
import {Injectable} from '@angular/core';
import {RecipientController} from "./controllers/recipient.controller";

@Injectable()
export class RecipientService {
    constructor(public recipient: RecipientController) {
    }

}
