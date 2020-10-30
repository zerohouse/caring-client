import {Component, OnInit} from "@angular/core";
import {Page, Giver} from "../../../../ngxSpring/giver.model";
import {GiverService} from "../../../../ngxSpring/giver.service";

@Component({
    selector: "giver_info",
    templateUrl: "./giver_info.component.html",
    styleUrls: ["./giver_info.component.sass"]
})

export class giver_infoComponent{
    btn: string;
    contract_type: string;
    newregist: boolean = true;
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
