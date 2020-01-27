import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'cr-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
    animations: [
        trigger('fadeIn', [
            state('true', style({opacity: 1})),
            state('*', style({opacity: 0})),
            transition('*=>true', [
                style({opacity: 0}),
                animate('200ms {{delay}}ms', style({opacity: 1}))
            ], {params: {delay: '0'}}),
            transition('true=>*', [
                style({opacity: 1}),
                animate(200, style({opacity: 0}))
            ])
        ])
    ]
})
export class MainComponent implements OnInit {
    open = [];

    constructor() {
    }

    ngOnInit() {
    }


}
