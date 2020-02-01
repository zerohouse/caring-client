import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cr-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {
    stories = [
        {
            name: '남순화',
            img: 'story-1.png',
            href: 'https://blog.naver.com/caring_official/221780557907',
            story: ' 7년이 넘도록 일을 했지만 보호사라는 생각을 저는 한번도 안 해 봤어요. 어르신들을 모시겠다는 생각으로 일을 시작했지요. ' +
                ' 친정할머니가 저를 이뻐해주셨거든요. 그때 받은 사랑을 이렇게 조금씩 나눠드린다고 생각해요. 어르신들도 그 마음을 아시고 저에게 잘해주세요.'
        },
        {
            name: '정미순',
            img: 'story-2.png',
            href: 'https://blog.naver.com/caring_official/221780507174',
            story: ' 8년이 넘게 이 일을 했어요. 이렇게 오래 할 수 있었던 배경에는 어르신을 내 부모님이다 생각했기에 가능했던 것 같아요. ' +
                ' 하루는 어르신이 호흡 곤란에 걸리신 적이 있는데 바로 옆에서 조치해드려 무사 하셨어요. 그런 순간, 순간 보람을 느끼고 있습니다.'
        },
        {
            name: '임연숙',
            img: 'story-3.png',
            href: 'https://blog.naver.com/caring_official/221778596061',
            story: ' 아프신 분들을 케어하는게 쉬운일은 아니에요. 하지만 제가 갈 시간이 되면 어르신들이 저를 기다리세요. 어떤 분은 아예 문을 열어놓고 계시기도 하구요. ' +
                ' 어르신들이 저를 필요로 하신다는 게 제가 이 일을 계속하는 원동력이 아닐까 싶어요. 내가 건강한 이상은 계속 이 일을 할 거에요.'
        }
    ];
    index = 0;


    constructor() {
    }

    ngOnInit() {
    }

    moveTo(href: string) {
        window.open(href, '_blank');
    }
}
