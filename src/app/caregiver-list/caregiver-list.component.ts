import {Component, OnInit} from '@angular/core';
import {CaregiverService} from '../../../ngxSpring/caregiver.service';
import {Page, Caregiver} from "../../../ngxSpring/caregiver.model";
import {Consult} from "../../../ngxSpring/consult.model";
import {ConsultService} from "../../../ngxSpring/consult.service";
import {Caretaker} from "../../../ngxSpring/caretaker.model";
import {CaretakerService} from "../../../ngxSpring/caretaker.service";

declare var TableToExcel;

@Component({
    selector: 'caregiver-list',
    templateUrl: './caregiver-list.component.html',
    styleUrls: ['./caregiver-list.component.sass']
})

export class CaregiverListComponent implements OnInit {
    visit_jobOffer: Page<Consult>;
    taker_data: Page<Caretaker>;
    giver_data: Page<Caregiver>;
    today: string = new Date().toISOString().substring(0, 10);
    taker: Caretaker = {
        id: null,
        createdAt: null,
        name: "",
        takeName: '',
        city: '',
        ward: '',
        address: '',
        sex: false,
        year: '',
        level: '',
        inmate: '',
        time: '',
        diaper: false,
        houseSize: '',
        phone: '',
        etc: '',
        man: false,
        pet: '',
        writer: '',
        moveIn: false,
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
        personality: '',
    };
    taker_save: boolean = false;
    giver_save: boolean = false;
    taker_choice: boolean = false;
    giver_choice: boolean = false;
    change: boolean = false;
    number: string;
    search: boolean = false;
    searchType: string = '번호'
    city: string[] = ["강원","경기","경남","경북","광주","대구","대전","부산","서울","세종","울산","인천","전남","전북","제주","충남","충북"];
    ward: string[];
    gangwon: string[] = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
    gyeonggi: string[] = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
    gyeongnam: string[] = ["거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
    gyeongbuk: string[] = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
    gwangju: string[] = ["광산구","남구","동구","북구","서구"];
    daegu: string[] = ["남구","달서구","동구","북구","서구","수성구","중구","달성군"];
    daejeon: string[] = ["대덕구","동구","서구","유성구","중구"];
    busan: string[] = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
    seoul: string[] = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
    sejong: string[] = ["세종"];
    incheon: string[] = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
    ulsan: string[] = ["남구","동구","북구","중구","울주군"];
    chungbuk: string[] = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
    chungnam: string[] = ["계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
    junbuk: string[] = ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
    junnam: string[] = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
    jeju: string[] = ["서귀포시","제주시","남제주군","북제주군"];
    counselor_list: string[] = [
        "김세진", "이건희", "이세은", "임규경", "전아영", "정기범"
    ];

    constructor(private api_giver: CaregiverService, private api_taker: CaretakerService, private api_consult: ConsultService) {

    }
    ngOnInit() {
        this.giver_load(0);
        this.taker_load(0);
        this.consult_load(0);
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
                this.api_giver.caregiver.getSearchNumberCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType==='지역'){
                this.api_giver.caregiver.getSearchAreaCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType==='이름'){
                this.api_giver.caregiver.getSearchNameCaregiver(this.number, $event, 7).subscribe( data => this.giver_data = data);
                return;
            }
        } else{
            this.api_giver.caregiver.getCaregiverList($event, 7).subscribe(data => this.giver_data = data);
        }
    }

    taker_load($event: any) {
        if(this.search===true){
            if(this.searchType==='번호'){
                this.api_taker.caretaker.getSearchNumberCaretaker(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType==='지역'){
                this.api_taker.caretaker.getSearchAreaCaretaker(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType==='이름'){
                this.api_taker.caretaker.getSearchNameCaretaker(this.number, $event, 7).subscribe( data => this.taker_data = data);
                return;
            }
        } else{
            this.api_taker.caretaker.getCaretakerList($event, 7).subscribe(data => this.taker_data = data);
        }
    }

    consult_load($event: any) {
        this.api_consult.consult.getStateConsult('일반_구인요청', $event, 7).subscribe(data => this.visit_jobOffer = data);
    }

    delete(item: Caregiver) {
        this.api_giver.caregiver.deleteCaregiver(item.id).subscribe(() => {
            this.giver_data.content.remove(item);
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
                this.api_giver.caregiver.getSearchNumberCaregiver(number, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='지역'){
            if(number.length>=1){
                this.api_giver.caregiver.getSearchAreaCaregiver(number, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='이름'){
            if(number.length>=1){
                this.api_giver.caregiver.getSearchNameCaregiver(number, 0, 7).subscribe(data => this.giver_data = data);
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
        this.api_giver.caregiver.saveCaregiver(item).subscribe(i => {
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

    select_ward(){
        if(this.giver.city==='강원'){
            this.ward=this.gangwon;
        } else if(this.giver.city==='경기'){
            this.ward=this.gyeonggi;
        } else if(this.giver.city==='경남'){
            this.ward=this.gyeongnam;
        } else if(this.giver.city==='경북'){
            this.ward=this.gyeongbuk;
        } else if(this.giver.city==='광주'){
            this.ward=this.gwangju;
        } else if(this.giver.city==='대구'){
            this.ward=this.daegu;
        } else if(this.giver.city==='대전'){
            this.ward=this.daejeon;
        } else if(this.giver.city==='부산'){
            this.ward=this.busan;
        } else if(this.giver.city==='서울'){
            this.ward=this.seoul;
        } else if(this.giver.city==='세종'){
            this.ward=this.sejong;
        } else if(this.giver.city==='울산'){
            this.ward=this.ulsan;
        } else if(this.giver.city==='인천'){
            this.ward=this.incheon;
        } else if(this.giver.city==='전남'){
            this.ward=this.junnam;
        } else if(this.giver.city==='전북'){
            this.ward=this.junbuk;
        } else if(this.giver.city==='제주'){
            this.ward=this.jeju;
        } else if(this.giver.city==='충남'){
            this.ward=this.chungnam;
        } else if(this.giver.city==='충북'){
            this.ward=this.chungbuk;
        }
    }
}
