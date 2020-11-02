import {Component, OnInit} from '@angular/core';
import {ConsultService} from '../../../ngxSpring/consult.service';
import {Page, Consult} from '../../../ngxSpring/consult.model';

declare var TableToExcel;

@Component({
    selector: 'consult',
    templateUrl: './consult.component.html',
    styleUrls: ['./consult.component.sass']
})
export class ConsultListComponent implements OnInit {
    data: Page<Consult>;
    today: Date = new Date();
    month: string = String(this.today.getMonth());
    day: string = String(this.today.getDay());
    list: Consult[];
    user: Consult = {
        state: '',
        progress: '',
        city: '',
        hole: '',
        phone: '',
        give: '',
        take: '',
        level: '',
        now: '',
        memo: '',
        come: '',
        first: '',
        start: '',
        end: '',
        id: null,
        createdAt: null,
        modifyAt: this.month + '-' + this.day,
        direct: true,
    };
    state: string;
    progress: string;
    number: string;
    search_term: string;
    saves: boolean = false;
    check: boolean = false;
    count: number = 0;
    change: boolean = false;

    constructor(private api: ConsultService) {

    }
    ngOnInit() {
        this.load(0);
    }

    load($event: any) {
        this.api.consult.getConsultList($event, 10).subscribe(data => this.data = data);
    }

    delete(item) {
        this.api.consult.deleteConsult(item.id).subscribe(() => {
            this.data.content.remove(item);
        });
    }

    getphone(number: string){
        this.api.consult.getSearchConsult(number).subscribe( list => this.list = list );
    }

    new() {
        this.user.state= '';
        this.user.progress= '';
        this.user.city= '';
        this.user.hole= '';
        this.user.phone= '';
        this.user.give= '';
        this.user.take= '';
        this.user.level= '';
        this.user.now= '';
        this.user.memo= '';
        this.user.come= '';
        this.user.first= '';
        this.user.start= '';
        this.user.end= '';
        this.user.id= null;
        this.user.createdAt= null;
        this.user.direct= true;
    }

    save(item: Consult) {
        this.api.consult.save(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

    download(table: HTMLTableElement) {
        TableToExcel.convert(table, {
            name: '상담요청.xlsx',
            sheet: {
                name: '상담요청'
            }
        });
    }
/*
    get(term: string, user: Consult): number {
        if (term==='state'){
            if (user.state===this.state){
                return 1;
            }
        }
        else if(term==='progress'){
            if (user.progress===this.progress){
                return 1;
            }
        }
        else{
            if (user.phone.includes(this.number)===true){
                return 1;
            }
        }
        return 0
    }*/
}

