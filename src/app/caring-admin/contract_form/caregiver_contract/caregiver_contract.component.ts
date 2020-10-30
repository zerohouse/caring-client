import { Component } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from "file-saver/FileSaver";

import { docGiver } from "../cr-caregiver";

@Component({
    selector: "caregiver_contract",
    templateUrl: "./caregiver_contract.component.html",
    styleUrls: ["./caregiver_contract.component.sass"]
})

export class caregiver_contractComponent {

    name: string;
    center: string = '센터선택';
    time: string = '시간선택';
    address: string;
    place: string;
    phone: string;
    start: string;
    contract: string;


    public downloadCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): void {
        const caregiver = new docGiver();
        const doc = caregiver.createCaregiver(name, center, time, address, place, phone, start, contract);

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, name + "님_근로 계약서.docx");
            console.log("Document created successfully");
        });
    }
}
