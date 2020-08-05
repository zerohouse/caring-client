import {Component, OnInit} from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'cr-nursing-services',
  templateUrl: './nursing-services.component.html',
  styleUrls: ['./nursing-services.component.sass']
})
export class Nursing_servicesComponent implements OnInit {
    services = [
        {
            name: '가족 요양',
            img: 'img-service-01-family.png',
            story: ' 가족 요양은 가족 구성원 중 한 분이 요양보호사 자격증을 소지하고 계실 경우,' +
                ' 직접 어르신을 돌봐드리고 가족요양 급여를 받으실 수 있는 서비스입니다.',
            title: '가족요양 급여',
            contents1: '케어링의 가족요양 급여는',
            contents_green: ' 60분 21,000원/90분 28,000원',
            contents2: '으로 국내 최고 금액으로 책정하고 있습니다.'
        },
        {
            name: '방문 요양',
            img: 'img-service-02-pro.png',
            story: ' 케어링 소속의 요양보호사님이 집을 방문하여 어르신을 돌보아 드리는 서비스입니다.' +
                ' 식사도움, 청결유지, 외출동행의 활동을 제공합니다.',
            title: '방문 요양비',
            contents1: '국가에서 요양비의 최대',
            contents_green: ' 85~100%',
            contents2: '까지 지원받을 수 있어, 부담없이 이용하실 수 있습니다.'
        }
    ];
    index = 0;

  constructor() { }

  ngOnInit() {
  }

}
