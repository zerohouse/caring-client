import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../ngxSpring/api.service';
import {ScriptService} from 'ngx-script-loader';
import {ConsultService} from "../../../ngxSpring/consult.service";

declare var wcs;
declare var _nasa;

@Component({
    selector: 'cr-help-request',
    templateUrl: './help-request.component.html',
    styleUrls: ['./help-request.component.sass']
})
export class HelpRequestComponent implements OnInit {
    phone: any;
    reserved;

    constructor(private api: ConsultService, private scriptService: ScriptService) {
        this.reserved = localStorage.getItem('reservedDate') === String(new Date().getUTCDate());
        // this.reserved = true;
    }

    ngOnInit() {
    }

    reserve() {

        if (!this.phone) {
            alert('휴대폰 번호를 입력해주세요.');
            return;
        }
        if(this.phone.length<9){
            alert('휴대폰 번호를 확인해주세요.');
            return;
        }
        if(this.phone.indexOf(' ') != -1){
            alert('스페이스 바를 사용하지 말아주세요.');
            return;
        }

        this.api.consult.saveConsult({
            state: '홈페이지 예약',
            progress: '',
            city: '',
            hole: '',
            phone: phoneNumberFormat(this.phone),
            give: '',
            take: '',
            phone2: '',
            giveName: '',
            takeName: '',
            level: '',
            now: '',
            memo: '',
            come: '홈페이지',
            first: '',
            start: '',
            end: '',
            deleteReason: '',
            csComplete: false,
            firstOrder: false,
            id: null,
            createdAt: null,
            lastModifiedDate: new Date().toISOString(),
            direct: false,
            minute: '',
        }).subscribe(() => {
            alert('상담 예약이 되었습니다.');
            localStorage.setItem('reservedDate', String(new Date().getUTCDate()));
            this.reserved = true;
            //this.scriptService.loadScript('https://wcs.naver.net/wcslog.js').subscribe(() => {
            //    _nasa['cnv'] = wcs.cnv('1', '10'); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
            //});
        });
    }

    /*reserveCancel() {
        localStorage.clear();
        this.reserved = false;
    }*/
}

export const phoneNumberFormat = (value: string) => {
    const phoneReplace = /-/g;
    const phoneNumber = value.toString().replace(phoneReplace, '');
    let format: string = '';

    if(phoneNumber.length === 10 && phoneNumber.slice(0,2) === "02") {
        format = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 10) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 11) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
    }
    return format;
};

// <!-- 전환페이지 설정 -->
// <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
//     <script type="text/javascript">
// var _nasa={};
// _nasa["cnv"] = wcs.cnv("1","10"); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
// </script>
