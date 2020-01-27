import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cr-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

    @Input()
    qna;

    open = false;

    constructor() {
    }

    ngOnInit() {
    }

}
