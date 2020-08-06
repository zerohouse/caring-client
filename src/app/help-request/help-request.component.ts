import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../ngxSpring/api.service';
import {ScriptService} from 'ngx-script-loader';

declare var wcs;
declare var _nasa;

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

    constructor(private api: ApiService, private scriptService: ScriptService) {
        this.reserved = localStorage.getItem('reservedDate') === String(new Date().getUTCDate());
        // this.reserved = true;
    }

    ngOnInit() {
    }

    reserve() {

        if (!this.phone) {
            alert('휴대폰 번호를 입력해주세요.');
            return;
        } else {
            alert('상담 예약이 되었습니다.');
            return;
        }

        this.api.reserve.newReserve({
            createdAt: null,
            id: null,
            direct: false,
            name: "이름",
            optionGoWith: this.goWith,
            optionHome: this.home,
            optionTime: this.time,
            phone: this.phone,
            memo: null
        }).subscribe(() => {
            localStorage.setItem('reservedDate', String(new Date().getUTCDate()));
            this.reserved = true;
            this.scriptService.loadScript('https://wcs.naver.net/wcslog.js').subscribe(() => {
                _nasa['cnv'] = wcs.cnv('1', '10'); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
            });
        });
    }

    reserveCancel() {
        localStorage.clear();
        this.reserved = false;
    }
}

// <!-- 전환페이지 설정 -->
// <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
//     <script type="text/javascript">
// var _nasa={};
// _nasa["cnv"] = wcs.cnv("1","10"); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
// </script>
