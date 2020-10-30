import {Component, OnInit} from "@angular/core";
import {Page, Recipient} from "../../../../ngxSpring/recipient.model";
import {RecipientService} from "../../../../ngxSpring/recipient.service";

@Component({
  selector: "reci_info",
  templateUrl: "./reci_info.component.html",
  styleUrls: ["./reci_info.component.sass"]
})

export class reci_infoComponent implements OnInit {
  btn: string;
  contract_type: string;
  newregist: string = 'default';
  data: Page<Recipient>;
  user: Recipient;

  constructor(private api: RecipientService) {
  }

  ngOnInit() {
    this.load(0);
  }

  load($event: any) {
    this.api.recipient.getRecipientList($event, 100).subscribe(data => this.data = data);
  }

  delete(recipient) {
    this.api.recipient.deleteRecipient(recipient.id).subscribe(() => {
      this.data.content.remove(recipient);
    });
  }

  new() {
      this.data.content.unshift({direct: true} as Recipient);
  }

  save(recipient: Recipient) {
    this.api.recipient.save(recipient).subscribe(i => {
      recipient.id = i.id;
      recipient.createdAt = i.createdAt;
    });
  }

}
