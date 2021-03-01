import {Component, OnInit} from '@angular/core';
import {CaregiverService} from '../../../ngxSpring/caregiver.service';
import {Page, Caregiver} from "../../../ngxSpring/caregiver.model";

declare var TableToExcel;

@Component({
    selector: 'caregiver-list',
    templateUrl: './caregiver-list.component.html',
    styleUrls: ['./caregiver-list.component.sass']
})

export class CaregiverListComponent implements OnInit {
    taker_data: Page<Caregiver>;
    giver_data: Page<Caregiver>;
    today: string = new Date().toISOString().substring(0, 10);
    taker: Caregiver = {
        id: null,
        createdAt: null,
        name: '',
        year: '',
        city: '',
        ward: '',
        time: '',
        hopeArea: '',
        phone: '',
        career: '',
        etc: '',
        certificate: '',
        weekend: '',
        man: false,
        address: '',
        pet: '',
        writer: '',
        work: true,
        moveIn: false,
        dementia: false,
    };

    giver: Caregiver = {
        id: null,
        createdAt: null,
        name: '',
        year: '',
        city: '',
        ward: '',
        time: '',
        hopeArea: '',
        phone: '',
        career: '',
        etc: '',
        certificate: '',
        weekend: '',
        man: false,
        address: '',
        pet: '',
        writer: '',
        work: true,
        moveIn: false,
        dementia: false,
    };
    taker_save: boolean = false;
    giver_save: boolean = false;
    taker_choice: boolean = false;
    giver_choice: boolean = false;
    change: boolean = false;
    number: string;
    search: boolean = false;
    searchType: string = '번호'

    constructor(private api: CaregiverService) {

    }
    ngOnInit() {
        this.giver_load(0);
        this.taker_load(0);
    }

    new_giver(){
        this.giver.id = null;
        this.giver.createdAt = null;
        this.giver.name = '';
        this.giver.year = '';
        this.giver.city = '';
        this.giver.ward = '';
        this.giver.time = '';
        this.giver.hopeArea = '';
        this.giver.phone = '';
        this.giver.career = '';
        this.giver.etc = '';
        this.giver.certificate = '';
        this.giver.weekend = '';
        this.giver.man = false;
        this.giver.address = '';
        this.giver.pet = '';
        this.giver.writer = '';
        this.giver.work = true;
        this.giver.moveIn = false;
        this.giver.dementia = false;
    }

    giver_load($event: any) {
        if(this.search===true){
            if(this.searchType==='번호'){
                this.api.caregiver.getSearchNumberCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType==='지역'){
                this.api.caregiver.getSearchAreaCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType==='이름'){
                this.api.caregiver.getSearchNameCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            }
        } else{
            this.api.caregiver.getCaregiverList($event, 7).subscribe(data => this.giver_data = data);
        }
    }

    taker_load($event: any) {
        if(this.search===true){
            if(this.searchType==='번호'){
                this.api.caregiver.getSearchNumberCaregiver(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType==='지역'){
                this.api.caregiver.getSearchAreaCaregiver(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType==='이름'){
                this.api.caregiver.getSearchNameCaregiver(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            }
        } else{
            this.api.caregiver.getCaregiverList($event, 7).subscribe(data => this.taker_data = data);
        }
    }

    delete(item: Caregiver, ) {
        this.api.caregiver.deleteCaregiver(item.id).subscribe(() => {
            this.taker_data.content.remove(item);
        });
    }

    check(value: boolean): string{
        if(value===true){
            return 'O'
        } else {
            return 'X'
        }
    }

    getSearch(searchType: string, number: string){
        if(searchType==='번호'){
            if(number.length>=1){
                this.api.caregiver.getSearchNumberCaregiver(number, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='지역'){
            if(number.length>=1){
                this.api.caregiver.getSearchAreaCaregiver(number, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='이름'){
            if(number.length>=1){
                this.api.caregiver.getSearchNameCaregiver(number, 0, 7).subscribe(data => this.giver_data = data);
            }
        }
        if(number.length>=1){
            this.search=true
        } else {
            this.giver_load(0);
            this.search=false
        }
    }

    save(item: Caregiver) {
        this.api.caregiver.saveCaregiver(item).subscribe(i => {
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

    PhoneNumberFormat = (value: string) => {

        if(value === null || value === ''){
            return '';
        }

        const phoneReplace = /-/g;
        const phoneNumber = value.toString().replace(phoneReplace, '');
        let format: string = '';

        if(phoneNumber.length === 9) {
            format = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5)}`;
        } else if(phoneNumber.length === 10 && phoneNumber.slice(0,2) === "02") {
            format = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
        } else if (phoneNumber.length === 10) {
            format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        } else if (phoneNumber.length === 11) {
            format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
        } else if (phoneNumber.length > 11 || phoneNumber.length < 9){
            return value;
        }

        return format;
    };

    calculation_age(year: string): number{
        if(year === null || year === ''){
            return 0;
        }

        let today= new Date();

        return today.getFullYear()-(+year);
    }
}
