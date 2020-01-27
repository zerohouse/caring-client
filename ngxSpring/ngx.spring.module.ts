/* tslint:disable */
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {ApiHttp} from './api.http';
import {ReserveController} from './controllers/reserve.controller';

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService, ApiHttp, ReserveController]
})
export class NgxSpringModule {
}
