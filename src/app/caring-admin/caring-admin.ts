import { Component } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from "file-saver/FileSaver";

import { docGiver } from "./cr-caregiver";
import { docRec } from "./cr-recipient";
import { docRecord } from "./cr-recordpaper";

@Component({
  selector: "caring_admin",
  templateUrl: "./caring-admin.html",
  styleUrls: ["./caring-admin.sass"]
})

export class adminComponent {
  worker: boolean = false;
  client: boolean = false;
  record: boolean = false;

  name: string;
  center: string = '센터선택';
  time: string = '시간선택';
  address: string;
  place: string;
  phone: string;
  start: string;
  end: string;
  contract: string;

  recname: string;
  reclevel: string = '등급선택';
  recbirth: string;
  recaddress: string;
  recphone: string;
  etc: string = '일반';
  reccenter: string = '센터선택';
  pname: string = '';
  relation: string = '';
  pbirth: string = '';
  pphone: string = '';
  paddress: string = '';
  contract_start: string;
  contract_end: string;
  useday: string;
  usestime: string;
  useetime: string;
  contract_date: string;


  rname: string;
  rbirth: string;
  rlevel: string = '등급선택';
  rnumber: string;
  rcenter: string = '센터선택';
  rphone: string;
  day: number = 0;
  firstday: string = '';
  firststime: string = '';
  firsttime: string = '';
  secondday: string = '';
  secondstime: string = '';
  secondtime: string = '';
  thirdday: string = '';
  thirdstime: string = '';
  thirdtime: string = '';
  fourthday: string = '';
  fourthstime: string = '';
  fourthtime: string = '';
  fifthday: string = '';
  fifthstime: string = '';
  fifthtime: string = '';
  sixthday: string = '';
  sixthstime: string = '';
  sixthtime: string = '';
  seventhday: string = '';
  seventhstime: string = '';
  seventhtime: string = '';

  public downloadCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, end: string, contract: string): void {
    const caregiver = new docGiver();
    const doc = caregiver.createCaregiver(name, center, time, address, place, phone, start, end, contract);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님_근로 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public downloadRecipient(name: string, level: string, birth: string, address: string, phone: string, etc: string, center: string, pname: string, relation: string, pbirth: string, pphone: string, paddress: string, contract_start: string, contract_end: string, useday: string, usestime: string, useetime: string, contract_date: string): void {
    const recipient = new docRec();
    const doc = recipient.createRecipient(name, level, birth, address, phone, etc, center, pname, relation, pbirth, pphone, paddress, contract_start, contract_end, useday, usestime, useetime, contract_date);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님 방문요양 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public downloadRecordpaper(name: string, birth: string, level: string, number: string, center: string, firstday: string, firststime: string, firsttime: string, secondday: string, secondstime: string, secondtime: string, thirdday: string, thirdstime: string, thirdtime: string, fourthday: string, fourthstime: string, fourthtime: string, fifthday: string, fifthstime: string, fifthtime: string, sixthday: string, sixthstime: string, sixthtime: string, seventhday: string, seventhstime: string, seventhtime: string): void {
    const record = new docRecord();
    const doc = record.createRecordpaper(name, birth, level, number, center, firstday, firststime, firsttime, secondday, secondstime, secondtime, thirdday, thirdstime, thirdtime, fourthday, fourthstime, fourthtime, fifthday, fifthstime, fifthtime, sixthday, sixthstime, sixthtime, seventhday, seventhstime, seventhtime);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "요보사님 " + firstday + "부터 기록지.docx");
      console.log("Document created successfully");
    });
  }

}