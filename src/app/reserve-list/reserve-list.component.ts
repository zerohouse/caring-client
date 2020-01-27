import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../ngxSpring/api.service';
import {Page, Reserve} from '../../../ngxSpring/api.model';

declare var TableToExcel;

@Component({
    selector: 'cr-reserve-list',
    templateUrl: './reserve-list.component.html',
    styleUrls: ['./reserve-list.component.sass']
})
export class ReserveListComponent implements OnInit {
    data: Page<Reserve>;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.load(0);
    }

    load($event: any) {
        this.api.reserve.getReserveList($event, 10).subscribe(data => this.data = data);
    }

    download(table: HTMLTableElement) {
        TableToExcel.convert(table, {
            name: '상담요청.xlsx',
            sheet: {
                name: '상담요청'
            }
        });
    }
}
