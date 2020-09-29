import { Component } from "@angular/core";
import {Page, Recipient} from "../../../../ngxSpring/recipient.model";
import {RecipientService} from "../../../../ngxSpring/recipient.service";
import {checkAuthority} from "../../reserve-list/reserve-list.component";


/*
const db = require('mysql');

db.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'recipient'
});

db.connect();
db.query(`SELECT * FROM recipient`, function (error,list){
  console.log(list);
})
*//*
function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if(data.userSelectedType === 'R'){
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if(data.buildingName !== '' && data.apartment === 'Y'){
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if(extraAddr !== ''){
          extraAddr = ' (' + extraAddr + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        (<HTMLInputElement>document.getElementById("sample6_extraAddress")).value = extraAddr;

      } else {
        (<HTMLInputElement>document.getElementById("sample6_extraAddress")).value = '';
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      (<HTMLInputElement>document.getElementById('sample6_postcode')).value = data.zonecode;
      (<HTMLInputElement>document.getElementById("sample6_address")).value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    }
  }).open();
}
*/
@Component({
  selector: "reci_info",
  templateUrl: "./reci_info.component.html",
  styleUrls: ["./reci_info.component.sass"]
})

export class reci_infoComponent {
  btn: string;
  information: string;
  contract_type: string;
  newregist: string = 'default';
  data: Page<Recipient>;

  constructor(private api: RecipientService) {

  }

  ngOnInit() {
    this.load(0);
  }

  load($event: any) {
    this.api.recipient.getRecipientList($event, 100).subscribe(data => this.data = data);
  }

  update(recipient) {
    this.api.recipient.update(recipient.recognitionNumber).subscribe();
  }

  delete(recipient) {
    if (!checkAuthority()) {
      return;
    }
    this.api.recipient.deleteRecipient(recipient.recognitionNumber).subscribe(() => {
      this.data.content.remove(recipient);
    });
  }

  new() {
    this.data.content.unshift({direct: true} as Recipient);
  }

  save(recipient: Recipient) {
    this.api.recipient.save(recipient).subscribe(i => {
      recipient.recognitionNumber = i.recognitionNumber;
      recipient.createdAt = i.createdAt;
    });
  }
}
/*
function creatrecipient(){
  db.query(`INSERT INTO recipient(name, birth, gender, type, recognitionNumber, startdate, validityStart, validityEnd, level, supplyType, state,
   disease, postNumber, address, detailAddress, contractorName, contractorbirth, contractormemo, relationship, phone, contractorPhone, note)
   VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, []
  )
}
*/
