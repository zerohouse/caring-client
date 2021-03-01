import {BrowserModule, EventManager} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {HowtoComponent} from './howto/howto.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {QnaComponent} from './qna/qna.component';
import {QuestionComponent} from './qna/question/question.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResponsiveModule} from 'ngx-responsive';
import {HeadlineComponent} from './headline/headline.component';
import {StoriesComponent} from './stories/stories.component';
import {HelpRequestComponent} from './help-request/help-request.component';
import {FormsModule} from '@angular/forms';
import {NgxSpringModule} from '../../ngxSpring/ngx.spring.module';
import {ReserveListComponent} from './reserve-list/reserve-list.component';
import {PaginationComponent} from './reserve-list/pagination/pagination.component';
import {PointerEventManager} from './pointer-event-manager';
import {InfoComponent} from './info/info.component';
import {FooterComponent} from './footer/footer.component';
import {BannerComponent} from './banner/banner.component';
import {Why_caringComponent} from './why_caring/why_caring.component';
import { Country_subsidyComponent } from './country_subsidy/country_subsidy.component';
import { HelpcaringComponent } from './help-caring/help-caring.component';
import { Nursing_servicesComponent } from './nursing-services/nursing-services.component';
import { Pay_calculationComponent } from './pay-calculation/pay-calculation.component';
import { Caring_newsComponent } from './caring-news/caring_news.component';
import { NationwideComponent } from './nationwide/nationwide.component';
import { adminComponent } from './caring-admin/contract_form/pre-contract-writing/caring-admin';
import {admin_mainComponent} from "./caring-admin/admin_main/admin_main.component";
import {caregiver_contractComponent} from "./caring-admin/contract_form/caregiver_contract/caregiver_contract.component";
import {recipient_contractComponent} from "./caring-admin/contract_form/recipient_contract/recipient_contract.component";
import {ConsultListComponent} from "./consult/consult.component";
import {CaringMapComponent} from "./caring-map/caring-map.component";
import {CallFooterComponent} from "./call-footer/call-footer.component";
import {LcrComponent} from "./labor-cost-ratio/lcr.component";
import {CountUpModule} from "ngx-countup";
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {Yt_mainComponent} from "./yt_main/yt_main.component";
import {Yt_headlineComponent} from "./yt_headline/yt_headline.component";
import {CaregiverListComponent} from "./caregiver-list/caregiver-list.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        Yt_mainComponent,
        HowtoComponent,
        QnaComponent,
        QuestionComponent,
        HeadlineComponent,
        Yt_headlineComponent,
        StoriesComponent,
        HelpRequestComponent,
        ReserveListComponent,
        PaginationComponent,
        InfoComponent,
        FooterComponent,
        Why_caringComponent,
        Country_subsidyComponent,
        HelpcaringComponent,
        Nursing_servicesComponent,
        Pay_calculationComponent,
        Caring_newsComponent,
        NationwideComponent,
        BannerComponent,
        adminComponent,
        admin_mainComponent,
        caregiver_contractComponent,
        recipient_contractComponent,
        ConsultListComponent,
        CaregiverListComponent,
        CaringMapComponent,
        CallFooterComponent,
        LcrComponent,
        ChatbotComponent,
    ],
    imports: [
        NgxSpringModule,
        ScrollToModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DragScrollModule,
        SwiperModule,
        ScrollToModule,
        ResponsiveModule.forRoot(),
        FormsModule,
        CountUpModule
    ],
    providers: [
        {provide: EventManager, useClass: PointerEventManager}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
