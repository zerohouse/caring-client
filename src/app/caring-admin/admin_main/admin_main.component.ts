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
  selector: "admin_main",
  templateUrl: "./admin_main.component.html",
  styleUrls: ["./admin_main.component.sass"]
})

export class admin_mainComponent {
  btn: string;
  information: string;
  record_parameter: string;
  contract_type: string;
  message: string;
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
