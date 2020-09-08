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
import { adminComponent } from './caring-admin/caring-admin';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        HowtoComponent,
        QnaComponent,
        QuestionComponent,
        HeadlineComponent,
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
        adminComponent
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
        FormsModule
    ],
    providers: [
        {provide: EventManager, useClass: PointerEventManager}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
