import { Component } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from "file-saver/FileSaver";

import { docGiver } from "../cr-caregiver";
import { docRec } from "../cr-recipient";
import { docRecord } from "../cr-recordpaper";
import { doc_salary } from "../cr-caregiver-salary";
import { docResignation } from "../cr-resignation";
import { docFamilyGiver } from "../cr-family_caregiver";
import { doc2021Giver } from "../cr-2021cargiver";
import { doc2021FamilyGiver } from "../cr-2021family_cargiver";
import {doc2021Rec} from "../cr-2021recipient";

@Component({
  selector: "caring_admin",
  templateUrl: "./caring-admin.html",
  styleUrls: ["./caring-admin.sass"]
})

export class adminComponent {
  worker: boolean = false;
  client: boolean = false;
  record: boolean = false;
  salary: boolean = false;
  resignation: boolean = false;
  family: boolean = false;
  worker2021: boolean = false;
  family2021: boolean = false;
  client2021: boolean = false;

  name: string;
  center: string = '센터선택';
  time: string = '시간선택';
  address: string;
  place: string;
  phone: string;
  start: string;
  contract: string;

  recname: string;
  reclevel: string = '등급선택';
  recbirth: string;
  recaddress: string;
  recphone: string = '';
  recnumber: string;
  etc: string = '일반';
  reccenter: string = '센터선택';
  pname: string = '';
  relation: string = '';
  pbirth: string = '';
  pphone: string = '';
  paddress: string = '';
  contract_start: string;
  contract_end: string;
  useday: string = '';
  usestime: string;
  useetime: string;
  contract_date: string;


  rname: string;
  rbirth: string;
  rlevel: string = '등급선택';
  rnumber: string;
  rcenter: string = '센터선택';
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

  sal_name: string = '';
  sal_number: string = '';
  sal_relation: string = '';
  officials: string = '';
  bank: string = '';
  account_number: string = '';

  resig_name: string = '';
  resig_birth: string = '';
  resig_address: string = '';
  resig_phone: string = '';
  resig_center: string = '';
  resig_number: string = '';
  resig_start: string = '';
  resig_end: string = '';
  resig_date: string = '';

  public downloadCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): void {
    const caregiver = new docGiver();
    const doc = caregiver.createCaregiver(name, center, time, address, place, phone, start, contract);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님_근로 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public downloadFamilyCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): void {
    const caregiver = new docFamilyGiver();
    const doc = caregiver.createFamilyCaregiver(name, center, time, address, place, phone, start, contract);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님_" + time +"분 가족요양 근로 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public download_salary(sal_name: string, sal_number: string, sal_relation: string, officials: string, bank: string, account_number: string): void {
    const salary = new doc_salary();
    const doc = salary.createSalary(sal_name, sal_number, sal_relation, officials, bank,account_number);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, sal_name + "님_급여 이체 동의서.docx");
      console.log("Document created successfully");
    });
  }

  public downloadRecipient(name: string, level: string, number:string, birth: string, address: string, phone: string, etc: string, center: string, pname: string, relation: string, pbirth: string, pphone: string, paddress: string, contract_start: string, contract_end: string, useday: string, usestime: string, useetime: string, contract_date: string): void {
    const recipient = new docRec();
    const doc = recipient.createRecipient(name, level, number, birth, address, phone, etc, center, pname, relation, pbirth, pphone, paddress, contract_start, contract_end, useday, usestime, useetime, contract_date);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님 방문요양 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public download2021Recipient(name: string, level: string, number:string, birth: string, address: string, phone: string, etc: string, center: string, pname: string, relation: string, pbirth: string, pphone: string, paddress: string, contract_start: string, contract_end: string, useday: string, usestime: string, useetime: string, contract_date: string): void {
    const recipient = new doc2021Rec();
    const doc = recipient.create2021Recipient(name, level, number, birth, address, phone, etc, center, pname, relation, pbirth, pphone, paddress, contract_start, contract_end, useday, usestime, useetime, contract_date);

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

  public downloadResignation(name: string, birth: string, address: string, phone: string, center: string, resig_number: string, resig_start: string, resig_end: string, resig_date: string): void {
    const recipient = new docResignation();
    const doc = recipient.createResignation(name, birth, address, phone, center, resig_number, resig_start, resig_end, resig_date);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "요보사님 사직서.docx");
      console.log("Document created successfully");
    });
  }

  public download2021Caregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): void {
    const caregiver = new doc2021Giver();
    const doc = caregiver.create2021Caregiver(name, center, time, address, place, phone, start, contract);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님_근로 계약서.docx");
      console.log("Document created successfully");
    });
  }

  public download2021FamilyCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): void {
    const caregiver = new doc2021FamilyGiver();
    const doc = caregiver.create2021FamilyCaregiver(name, center, time, address, place, phone, start, contract);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, name + "님_" + time +"분 가족요양 근로 계약서.docx");
      console.log("Document created successfully");
    });
  }

}
