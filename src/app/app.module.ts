import {BrowserModule} from '@angular/platform-browser';
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
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import {PaginationComponent} from './reserve-list/pagination/pagination.component';


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
        PaginationComponent
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
