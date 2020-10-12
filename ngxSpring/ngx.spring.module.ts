/* tslint:disable */
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {ApiHttp} from './api.http';
import {ReserveController} from './controllers/reserve.controller';
import {RecipientService} from './recipient.service';
import {RecipientHttp} from "./recipient.http";
import {RecipientController} from "./controllers/recipient.controller";
import {GiverService} from "./giver.service";
import {GiverHttp} from "./giver.http";
import {GiverController} from "./controllers/giver.controller";

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService, ApiHttp, ReserveController, RecipientService, RecipientHttp, RecipientController, GiverService, GiverHttp, GiverController]
})
export class NgxSpringModule {
}
