/* tslint:disable */
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {ApiHttp} from './api.http';
import {ConsultController} from './controllers/consult.controller';
import {ReserveController} from './controllers/reserve.controller';
import {ConsultService} from "./consult.service";
import {CountUpModule} from "ngx-countup";
import {CaregiverController} from "./controllers/caregiver.controller";
import {CaregiverService} from "./caregiver.service";

@NgModule({
  imports: [HttpClientModule, CountUpModule],
  providers: [ApiService, ApiHttp, ReserveController, ConsultController, ConsultService, CaregiverController, CaregiverService]
})
export class NgxSpringModule {
}
