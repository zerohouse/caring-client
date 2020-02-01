import {Component, HostListener, OnInit} from '@angular/core';

declare var $;

@Component({
    selector: 'cr-howto',
    templateUrl: './howto.component.html',
    styleUrls: ['./howto.component.sass']
})
export class HowtoComponent implements OnInit {

    index = 0;
    slides = [
        {
            title: '장기요양보험 신청', body: ' 장기요양보험 등급, 받으셨나요?<br>' +
                '먼저 케어링에 전화하셔서<br>' +
                '무료로 장기요양보험 신청 절차를<br>' +
                '안내받으세요.<br><br> <span style="font-size: 24px">\n' +
                '                        무료 전화   1522-6585\n' +
                '                    </span>',
            image: './../../assets/img/step-1.png'
        },
      {
        title: '케어 컨설팅', body: '다년간의 경험을 쌓은 케어링 전속<br>' +
            '베테랑 컨설턴트가 어르신께 가장 적합한<br>' +
            '요양 프로그램을 설계합니다.',
        image: './../../assets/img/step-2.png'
      },
      {
        title: '요양보호사 매칭', body: '케어링 직속 센터장이 가정에 방문하여\n<br>' +
            '12가지 기준에 따라 어르신께 꼭 맞는\n<br>' +
            '요양보호사를 매칭해드립니다.',
        image: './../../assets/img/step-3.png'
      },
      {
        title: '케어링 서비스 시작', body: '철저한 교육을 통해 선별된\n<br>' +
            '케어링 요양보호사가 숙련된 경험으로\n<br>' +
            '프리미엄 방문요양서비스를 진행합니다.',
        image: './../../assets/img/step-4.png'
      }
    ];

    constructor() {
    }

    ngOnInit() {
    }


}

