import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cr-why_caring',
  templateUrl: './why_caring.component.html',
  styleUrls: ['./why_caring.component.sass']
})
export class Why_caringComponent implements OnInit {
    whys = [
        {
            name: '최고의 전문가',
            img: 'why-1.png',
            story: ' 업계에서 10년 이상 몸 담은 최고의 <br>' +
                ' 요양 전문가들이 만들어 믿을 수 있습니다.'
        },
        {
            name: '고품질 서비스',
            img: 'why-2.png',
            story: ' 100% 직영으로 전국 모든 지역에 <br>' +
                ' 일관된 서비스 품질을 약속합니다.'
        },
        {
            name: '철저한 교육',
            img: 'why-3.png',
            story: ' 요양보호사 교육원을 함께 운영하여 <br>' +
                ' 어르신 케어를 위한 모든 과정을 <br>철저히 교육합니다.'
        }
    ];
    index = 0;

  constructor() { }

  ngOnInit() {
  }

}
