import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cr-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {
    stories = [
        {name: '가나다', story: '케어링 처음으로 이용해봤는데 요양보호사님께서 저희 어머니를 아주 친절하고 세심하게 돌보아주셔서 진짜진짜 좋았습니다. 케어링 추천합니다아아. 추우처언.'},
        {name: 'ㄹㄹㄹ', story: '케어링 처음으로 이용해봤는데 요양보호사님께서 저희 어머니를 아주 친절하고 세심하게 돌보아주셔서 진짜진짜 좋았습니다. 케어링 추천합니다아아. 추우처언.'},
        {name: 'ㅂㅂㅂ', story: '케어링 처음으로 이용해봤는데 요양보호사님께서 저희 어머니를 아주 친절하고 세심하게 돌보아주셔서 진짜진짜 좋았습니다. 케어링 추천합니다아아. 추우처언.'}
    ];
    index = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
