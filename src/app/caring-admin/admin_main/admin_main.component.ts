import { Component } from "@angular/core";

@Component({
  selector: "admin_login",
  templateUrl: "./admin_main.component.html",
  styleUrls: ["./admin_main.component.sass"]
})

export class admin_mainComponent {
  btn: string;
  information: string;
  record_parameter: string;
  contract_type: string;
  message: string;
}
