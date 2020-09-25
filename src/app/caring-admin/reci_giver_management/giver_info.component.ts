import { Component } from "@angular/core";
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

export class giver_infoComponent {
    btn: string;
    information: string;
    contract_type: string;
    new: string = 'default';
}
/*
function creatrecipient(){
  db.query(`INSERT INTO recipient(name, birth, gender, type, recognitionNumber, startdate, validityStart, validityEnd, level, supplyType, state,
   disease, postNumber, address, detailAddress, contractorName, contractorbirth, contractormemo, relationship, phone, contractorPhone, note)
   VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, []
  )
}
*/
