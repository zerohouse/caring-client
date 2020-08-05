import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
    selector: 'cr-howto',
    templateUrl: './howto.component.html',
    styleUrls: ['./howto.component.sass']
})
export class HowtoComponent implements OnInit {

    indexValue = 0;

    get index() {
        return this.indexValue;
    }

    set index(i) {
        const el = $('.drag-scroll-content');
        if (el) {
            const value = $($('.swiperindex')[i]).offset().left + el.scrollLeft() - 100;
            // el.scrollLeft(value);
            $(el).animate({scrollLeft: value}, 200);
        }
        this.indexValue = i;
    }

    slides = [
        {
            title: '먼저, 장기요양보험을<br>'+ '신청합니다.', body: ' 장기요양보험 등급, 받으셨나요?<br>' +
                '케어링에 전화하셔서 무료로 장기요양보험<br>' +
                '신청 절차를 안내받으세요.<br>',
            image: './../../assets/img/step-1.png'
        },
        {
            title: '어르신께 맞는<br>' + '케어 컨설팅을 받습니다.', body: '다년간의 경험을 쌓은 케어링 전속<br>' +
                '베테랑 컨설턴트가 어르신께 가장 적합한<br>' +
                '요양 프로그램을 설계합니다.',
            image: './../../assets/img/step-2.png'
        },
        {
            title: '요양보호사를<br>' + '매칭해드립니다.', body: '케어링 직속 센터장이 가정에 방문하여<br>' +
                '12가지 기준에 따라 어르신께 꼭 맞는<br>' +
                '요양보호사를 매칭해드립니다.',
            image: './../../assets/img/step-3.png'
        },
        {
            title: '이제, 케어링을 <br>' + '시작하세요', body: '철저한 교육을 통해 선별된<br>' +
                '케어링 요양보호사가 숙련된 경험으로<br>' +
                '프리미엄 방문요양서비스를 진행합니다.',
            image: './../../assets/img/step-4.png'
        }
    ];
    swiperConfig = {
        autoplay: {
            delay: 3000
        },
        height: 535
    };

    constructor() {
    }

    ngOnInit() {
    }


}

