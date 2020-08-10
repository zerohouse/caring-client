import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
    selector: 'cr-pay-calculation.',
    templateUrl: './pay-calculation.component.html',
    styleUrls: ['./pay-calculation.component.sass']
})


export class Pay_calculationComponent implements OnInit {

    type: any = 'family';
    minute: any = '60min';
    level: any = 'level1';
    count: any =  'four';

    constructor() {
    }

    ngOnInit() {
    }

}
