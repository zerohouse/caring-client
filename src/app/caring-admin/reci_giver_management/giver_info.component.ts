import {Component, OnInit} from "@angular/core";
import {Page, Giver} from "../../../../ngxSpring/giver.model";
import {GiverService} from "../../../../ngxSpring/giver.service";
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
*/
@Component({
    selector: "giver_info",
    templateUrl: "./giver_info.component.html",
    styleUrls: ["./giver_info.component.sass"]
})

export class giver_infoComponent{
    btn: string;
    information: string;
    contract_type: string;
    newregist: string = 'default';
    data: Page<Giver>;

    constructor(private api: GiverService) {

    }

    ngOnInit() {
        this.load(0);
    }

    load($event: any) {
        this.api.giver.getGiverList($event, 100).subscribe(data => this.data = data);
    }

    update(giver) {
        this.api.giver.update(giver.certificateNumber1).subscribe();
    }

    delete(giver) {
        this.api.giver.deleteGiver(giver.certificateNumber1).subscribe(() => {
            this.data.content.remove(giver);
        });
    }

    new() {
        this.data.content.unshift({direct: true} as Giver);
    }

    save(giver: Giver) {
        this.api.giver.save(giver).subscribe(i => {
            giver.certificateNumber1 = i.certificateNumber1;
            giver.createdAt = i.createdAt;
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
