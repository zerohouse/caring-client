import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cr-qna',
    templateUrl: './qna.component.html',
    styleUrls: ['./qna.component.sass']
})
export class QnaComponent implements OnInit {
    questions = [{
        q: '가나다',
        a: '라마바'
    },
        {
            q: '가나다',
            a: '라마바'
        },
        {
            q: '가나다',
            a: '라마바'
        }


    ];

    constructor() {
    }

    ngOnInit() {
    }

}
