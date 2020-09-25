/* tslint:disable */
import {Injectable} from '@angular/core';
import {AdminController} from "./controllers/admin.controller";

@Injectable()
export class adminService {
    constructor(public admin: AdminController) {
    }

}
