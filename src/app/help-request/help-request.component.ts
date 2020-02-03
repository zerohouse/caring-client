import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../ngxSpring/api.service';

@Component({
    selector: 'cr-help-request',
    templateUrl: './help-request.component.html',
    styleUrls: ['./help-request.component.sass']
})
export class HelpRequestComponent implements OnInit {
    goWith = false;
    phone: any;
    name: any;
    home = true;
    time = 0;
    reserved;

    constructor(private api: ApiService) {
        this.reserved = localStorage.getItem('reservedDate') === String(new Date().getUTCDate());
    }

    ngOnInit() {
    }

    reserve() {
        if (!this.name) {
            alert('이름을 입력해주세요.');
            return;
        }
        if (!this.phone) {
            alert('연락처를 입력해주세요.');
            return;
        }
        if (!this.goWith && !this.home) {
            alert('상담 내용을 선택해주세요.');
            return;
        }

        this.api.reserve.saveReserve({
            createdAt: null,
            id: null,
            name: this.name,
            optionGoWith: this.goWith,
            optionHome: this.home,
            optionTime: this.time,
            phone: this.phone
        }).subscribe(() => {
            localStorage.setItem('reservedDate', String(new Date().getUTCDate()));
            // alert('예약되었습니다.');
            this.reserved = true;
        });
    }

    reserveCancel() {
        localStorage.clear();
        this.reserved = false;

    }
}