import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cr-caring-news',
    templateUrl: './caring_news.component.html',
    styleUrls: ['./caring_news.component.sass']
})
export class Caring_newsComponent implements OnInit {
    newss = [
        {
            name: '월간인물',
            img: 'news-8.webp',
            href: 'http://www.monthlypeople.com/news/articleView.html?idxno=22748',
            story: ' 케어링 대표,' + "<br>" +
                '요양보호사와 어르신 '+ "<br>" +' 모두 만족할 수 있는 시스템 구축'
        },
        {
            name: '디지털타임스',
            img: 'news-7.webp',
            href: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=029&aid=0002626570',
            story: ' 케어링 주식회사, ' + "<br>" +
                '대한민국 최고 브랜드대상 방문요양 서비스부문 대상(大賞)'
        },
        {
            name: '한국경제',
            img: 'news-5.webp',
            href: 'https://n.news.naver.com/article/015/0004393778',
            story: ' 케어링 주식회사, 요양보호사 급여 대폭 올려'
        },
        {
            name: '조선일보',
            img: 'news-1.webp',
            href: 'https://news.chosun.com/site/data/html_dir/2020/05/24/2020052401794.html',
            story: ' 구독형 방문요양 론칭 이후 430% 성장'
        },
        {
            name: '머니투데이',
            img: 'news-2.webp',
            href: 'http://www.research-paper.co.kr/news/articleView.html?idxno=270747',
            story: ' 케어링 주식회사, 방문요양의 새로운 패러다임 제시'
        },
        {
            name: '시민일보',
            img: 'news-3.webp',
            href: 'http://www.siminilbo.co.kr/news/newsview.php?ncode=1065583253227285',
            story: ' 프리미엄 방문요양 케어링 간담회 개최'
        },
        {
            name: '조선일보',
            img: 'news-4.webp',
            href: 'https://biz.chosun.com/site/data/html_dir/2020/01/08/2020010802355.html',
            story: ' 케어링 주식회사, 서울광역푸드뱅크 센터에 한방차 700박스 기부'
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
