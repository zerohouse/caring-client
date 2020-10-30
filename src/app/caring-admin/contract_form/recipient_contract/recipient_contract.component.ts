import { Component } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from "file-saver/FileSaver";

import { docRec } from "../cr-recipient";

@Component({
    selector: "recipient_contract",
    templateUrl: "./recipient_contract.component.html",
    styleUrls: ["./recipient_contract.component.sass"]
})

export class recipient_contractComponent {

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
    useday1: string = '';
    usestime1: string;
    useetime1: string;
    useday2: string = '';
    usestime2: string;
    useetime2: string;
    contract_date: string;

    public downloadRecipient(name: string, level: string, number:string, birth: string, address: string, phone: string, etc: string, center: string, pname: string, relation: string, pbirth: string, pphone: string, paddress: string, contract_start: string, contract_end: string, useday: string, usestime: string, useetime: string, contract_date: string): void {
        const recipient = new docRec();
        const doc = recipient.createRecipient(name, level, number, birth, address, phone, etc, center, pname, relation, pbirth, pphone, paddress, contract_start, contract_end, useday, usestime, useetime, contract_date);

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, name + "님 방문요양 계약서.docx");
            console.log("Document created successfully");
        });
    }
}
