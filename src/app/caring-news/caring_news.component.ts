import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cr-caring-news',
    templateUrl: './caring_news.component.html',
    styleUrls: ['./caring_news.component.sass']
})
export class Caring_newsComponent implements OnInit {
    newss = [
        {
            name: '한국경제',
            img: 'news-5.PNG',
            href: 'https://n.news.naver.com/article/015/0004393778',
            story: ' 케어링 앤 컴퍼니, 요양보호사 급여 대폭 올려..'
        },
        {
            name: '조선일보',
            img: 'news-1.PNG',
            href: 'https://news.chosun.com/site/data/html_dir/2020/05/24/2020052401794.html',
            story: ' 구독형 방문요양 론칭 이후 430% 성장'
        },
        {
            name: '머니투데이',
            img: 'news-2.PNG',
            href: 'http://www.research-paper.co.kr/news/articleView.html?idxno=270747',
            story: ' 케어링 앤 컴퍼니, 방문요양의 새로운 패러다임 제시'
        },
        {
            name: '시민일보',
            img: 'news-3.PNG',
            href: 'http://www.siminilbo.co.kr/news/newsview.php?ncode=1065583253227285',
            story: ' 프리미엄 방문요양 케어링 앤 컴퍼니 간담회 개최'
        },
        {
            name: '조선일보',
            img: 'news-4.PNG',
            href: 'https://biz.chosun.com/site/data/html_dir/2020/01/08/2020010802355.html',
            story: ' 케어링 앤 컴퍼니, 서울광역푸드뱅크 센터에 한방차 700박스 기부'
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
