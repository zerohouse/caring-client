import {Component, OnInit} from '@angular/core';
import {CaregiverService} from '../../../ngxSpring/caregiver.service';
import {Page, Caregiver} from "../../../ngxSpring/caregiver.model";
import {Consult} from "../../../ngxSpring/consult.model";
import {ConsultService} from "../../../ngxSpring/consult.service";
import {Caretaker} from "../../../ngxSpring/caretaker.model";
import {CaretakerService} from "../../../ngxSpring/caretaker.service";
import {CityModel, Ward} from "../../../ngxSpring/city.model";

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
    matching_data: Page<Caregiver>;
    statistics_data : Caregiver[];
    today: string = new Date().toISOString().substring(0, 10);
    today_year: number = new Date().getFullYear();
    taker: Caretaker = {
        id: null,
        createdAt: null,
        protector: '',
        taker: '',
        phone: '',
        gender: false,
        age: 0,
        level: '',
        city: '',
        ward: '',
        address: '',
        active: '',
        restroom: '',
        diaper: '미착용',
        diaperText: '',
        weight: 0,
        disease: '',
        meal: '',
        avoidFood: '',
        recognition: '',
        sexRelated: '',
        houseSize: '',
        inmate: '',
        pet: '',
        nowCaregiver: '',
        religion: '',
        serviceTime: '',
        interviewTime: '',
        caregiverGender: '',
        hopeService: '',
        hopeCaregiver: '',
        writer: '',
    };

    giver: Caregiver = {
        id: null,
        createdAt: null,
        name: '',
        year: 0,
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
        gender: false,
        personality: '',
    };

    statistics_city: CityModel = {
        seoul: 0,
        gyeonggi: 0,
        incheon: 0,
        gangwon: 0,
        chungbuk: 0,
        chungnam: 0,
        gyeongbuk: 0,
        gyeongnam: 0,
        junbuk: 0,
        junnam: 0,
        daejeon: 0,
        daegu: 0,
        gwangju: 0,
        busan: 0,
        ulsan: 0,
        jeju: 0,
        sejong: 0,
    }

    statistics_ward: Ward = {
        gangwon_gangneung: 0,
        gangwon_donghae: 0,
        gangwon_samcheok: 0,
        gangwon_sokcho: 0,
        gangwon_wonju: 0,
        gangwon_chuncheon: 0,
        gangwon_taebaek: 0,
        gangwon_goseong: 0,
        gangwon_yanggu: 0,
        gangwon_yangyang: 0,
        gangwon_yeongwol: 0,
        gangwon_inje: 0,
        gangwon_jeongseon: 0,
        gangwon_cheorwon: 0,
        gangwon_pyeongchang: 0,
        gangwon_hongcheon: 0,
        gangwon_hwacheon: 0,
        gangwon_hoengseong: 0,
        gyeonggi_goyang: 0,
        gyeonggi_gwacheon: 0,
        gyeonggi_gwangmyeong: 0,
        gyeonggi_gwangju: 0,
        gyeonggi_guri: 0,
        gyeonggi_gunpo: 0,
        gyeonggi_gimpo: 0,
        gyeonggi_namyangju: 0,
        gyeonggi_dongducheon: 0,
        gyeonggi_bucheon: 0,
        gyeonggi_seongnam: 0,
        gyeonggi_suwon: 0,
        gyeonggi_siheung: 0,
        gyeonggi_ansan: 0,
        gyeonggi_anseong: 0,
        gyeonggi_anyang: 0,
        gyeonggi_yangju: 0,
        gyeonggi_osan: 0,
        gyeonggi_yongin: 0,
        gyeonggi_uiwang: 0,
        gyeonggi_uijeongbu: 0,
        gyeonggi_icheon: 0,
        gyeonggi_paju: 0,
        gyeonggi_pyeongtaeg: 0,
        gyeonggi_pocheon: 0,
        gyeonggi_hanam: 0,
        gyeonggi_hwaseong: 0,
        gyeonggi_gapyeong: 0,
        gyeonggi_yangpyeong: 0,
        gyeonggi_yeoju: 0,
        gyeonggi_yeoncheon: 0,
        gyeongnam_geoje: 0,
        gyeongnam_gimhae: 0,
        gyeongnam_milyang: 0,
        gyeongnam_sacheon: 0,
        gyeongnam_yangsan: 0,
        gyeongnam_jinju: 0,
        gyeongnam_changwon: 0,
        gyeongnam_tongyeong: 0,
        gyeongnam_geochang: 0,
        gyeongnam_goseong: 0,
        gyeongnam_namhae: 0,
        gyeongnam_sancheong: 0,
        gyeongnam_uilyeong: 0,
        gyeongnam_changnyeong: 0,
        gyeongnam_hadong: 0,
        gyeongnam_haman: 0,
        gyeongnam_hamyang: 0,
        gyeongnam_habcheon: 0,
        gyeongbuk_gyeongsan: 0,
        gyeongbuk_gyeongju: 0,
        gyeongbuk_gumi: 0,
        gyeongbuk_gimcheon: 0,
        gyeongbuk_mungyeong: 0,
        gyeongbuk_sangju: 0,
        gyeongbuk_andong: 0,
        gyeongbuk_yeongju: 0,
        gyeongbuk_yeongcheon: 0,
        gyeongbuk_pohang: 0,
        gyeongbuk_golyeong: 0,
        gyeongbuk_gunwi: 0,
        gyeongbuk_bonghwa: 0,
        gyeongbuk_seongju: 0,
        gyeongbuk_yeongdeog: 0,
        gyeongbuk_yeongyang: 0,
        gyeongbuk_yecheon: 0,
        gyeongbuk_ulleung: 0,
        gyeongbuk_uljin: 0,
        gyeongbuk_uiseong: 0,
        gyeongbuk_cheongdo: 0,
        gyeongbuk_cheongsong: 0,
        gyeongbuk_chilgog: 0,
        gwangju_gwangsan: 0,
        gwangju_south: 0,
        gwangju_east: 0,
        gwangju_north: 0,
        gwangju_wast: 0,
        daegu_south: 0,
        daegu_dalseo: 0,
        daegu_east: 0,
        daegu_north: 0,
        daegu_wast: 0,
        daegu_suseong: 0,
        daegu_jung: 0,
        daegu_dalseong: 0,
        daejeon_daedeog: 0,
        daejeon_east: 0,
        daejeon_wast: 0,
        daejeon_yuseong: 0,
        daejeon_jung: 0,
        busan_gangseo: 0,
        busan_geumjeong: 0,
        busan_south: 0,
        busan_east: 0,
        busan_dongrae: 0,
        busan_busanjin: 0,
        busan_north: 0,
        busan_sasang: 0,
        busan_saha: 0,
        busan_wast: 0,
        busan_suyeong: 0,
        busan_yeonje: 0,
        busan_yeongdo: 0,
        busan_jung: 0,
        busan_haeundae: 0,
        busan_gijang: 0,
        seoul_gangnam: 0,
        seoul_gangdong: 0,
        seoul_gangbug: 0,
        seoul_gangseo: 0,
        seoul_gwanag: 0,
        seoul_gwangjin: 0,
        seoul_guro: 0,
        seoul_geumcheon: 0,
        seoul_nowon: 0,
        seoul_dobong: 0,
        seoul_dongdaemun: 0,
        seoul_dongjag: 0,
        seoul_mapo: 0,
        seoul_seodaemun: 0,
        seoul_seocho: 0,
        seoul_seongdong: 0,
        seoul_seongbug: 0,
        seoul_songpa: 0,
        seoul_yangcheon: 0,
        seoul_yeongdeungpo: 0,
        seoul_yongsan: 0,
        seoul_eunpyeong: 0,
        seoul_jongro: 0,
        seoul_jung: 0,
        seoul_jungrang: 0,
        sejong_jochiwon: 0,
        sejong_geumnam: 0,
        sejong_bugang: 0,
        sejong_sojeong: 0,
        sejong_yeongi: 0,
        sejong_yeondong: 0,
        sejong_yeonseo: 0,
        sejong_janggun: 0,
        sejong_jeondong: 0,
        sejong_jeonui: 0,
        sejong_goun: 0,
        sejong_dajeong: 0,
        sejong_daepyeong: 0,
        sejong_dodam: 0,
        sejong_boram: 0,
        sejong_saerom: 0,
        sejong_sodam: 0,
        sejong_areum: 0,
        sejong_jongchon: 0,
        sejong_hansol: 0,
        incheon_gyeyang: 0,
        incheon_namdong: 0,
        incheon_east: 0,
        incheon_michuhol: 0,
        incheon_bupyeong: 0,
        incheon_wast: 0,
        incheon_yeonsu: 0,
        incheon_jung: 0,
        incheon_ganghwa: 0,
        incheon_ongjin: 0,
        ulsan_south: 0,
        ulsan_east: 0,
        ulsan_north: 0,
        ulsan_jung: 0,
        ulsan_ulju: 0,
        chungbuk_jecheon: 0,
        chungbuk_cheongju: 0,
        chungbuk_chungju: 0,
        chungbuk_goesan: 0,
        chungbuk_danyang: 0,
        chungbuk_boeun: 0,
        chungbuk_yeongdong: 0,
        chungbuk_ogcheon: 0,
        chungbuk_eumseong: 0,
        chungbuk_jeungpyeong: 0,
        chungbuk_jincheon: 0,
        chungnam_gyeryong: 0,
        chungnam_gongju: 0,
        chungnam_nonsan: 0,
        chungnam_dangjin: 0,
        chungnam_boryeong: 0,
        chungnam_seosan: 0,
        chungnam_asan: 0,
        chungnam_cheonan: 0,
        chungnam_geumsan: 0,
        chungnam_buyeo: 0,
        chungnam_seocheon: 0,
        chungnam_yesan: 0,
        chungnam_cheongyang: 0,
        chungnam_taean: 0,
        chungnam_hongseong: 0,
        junbuk_gunsan: 0,
        junbuk_gimje: 0,
        junbuk_namwon: 0,
        junbuk_igsan: 0,
        junbuk_jeonju: 0,
        junbuk_jeongeub: 0,
        junbuk_gochang: 0,
        junbuk_muju: 0,
        junbuk_buan: 0,
        junbuk_sunchang: 0,
        junbuk_wanju: 0,
        junbuk_imsil: 0,
        junbuk_jangsu: 0,
        junbuk_jinan: 0,
        junnam_gwangyang: 0,
        junnam_naju: 0,
        junnam_mokpo: 0,
        junnam_suncheon: 0,
        junnam_yeosu: 0,
        junnam_gangjin: 0,
        junnam_goheung: 0,
        junnam_gogseong: 0,
        junnam_gurye: 0,
        junnam_damyang: 0,
        junnam_muangun: 0,
        junnam_boseong: 0,
        junnam_sinan: 0,
        junnam_yeonggwang: 0,
        junnam_yeongam: 0,
        junnam_wando: 0,
        junnam_jangseong: 0,
        junnam_jangheung: 0,
        junnam_jindo: 0,
        junnam_hampyeong: 0,
        junnam_haenam: 0,
        junnam_hwasun: 0,
        jeju_seogwipo: 0,
        jeju_jeju: 0,
    }
    taker_save: boolean = false;
    giver_save: boolean = false;
    taker_choice: boolean = false;
    giver_choice: boolean = false;
    giver_count: number = 0;
    change: boolean = false;
    search_text_giver: string;
    search_text_taker: string;
    search: boolean = false;
    statistics: boolean = false;
    searchType_giver: string = '통합'
    searchType_taker: string = '통합'
    city: string[] = ["강원","경기","경남","경북","광주","대구","대전","부산","서울","세종","울산","인천","전남","전북","제주","충남","충북"];
    ward: string[];
    gangwon: string[] = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
    gyeonggi: string[] = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
    gyeongnam: string[] = ["거제시","김해시","밀양시","사천시","양산시","진주시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
    gyeongbuk: string[] = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
    gwangju: string[] = ["광산구","남구","동구","북구","서구"];
    daegu: string[] = ["남구","달서구","동구","북구","서구","수성구","중구","달성군"];
    daejeon: string[] = ["대덕구","동구","서구","유성구","중구"];
    busan: string[] = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
    seoul: string[] = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
    sejong: string[] = ["조치원읍","금남면","부강면","소정면","연기면","연동면","연서면","장군면","전동면","전의면","고운동","다정동","대평동","도담동","보람동","새롬동","소담동","아름동","종촌동","한솔동"];
    incheon: string[] = ["계양구","남동구","동구","미추홀구","부평구","서구","연수구","중구","강화군","옹진군"];
    ulsan: string[] = ["남구","동구","북구","중구","울주군"];
    chungbuk: string[] = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군"];
    chungnam: string[] = ["계룡시","공주시","논산시","당진시","보령시","서산시","아산시","천안시","금산군","부여군","서천군","예산군","청양군","태안군","홍성군"];
    junbuk: string[] = ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
    junnam: string[] = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
    jeju: string[] = ["서귀포시","제주시"];
    counselor_list: string[] = [
        "김세진", "이건희", "이세은", "임규경", "전아영", "정기범"
    ];
    level: string[] = ["1등급", "2등급", "3등급", "4등급", "5등급", "인지외등급", "등급없음"];
    active: string[] = ["스스로 가능", "부축 필요", "휠체어", "지팡이", "앉기만 가능", "누워서 생활"];
    restroom: string[] = ["스스로 가능", "뒷처리만 도움", "소변줄", "소변통"];
    eat: string[] = ["스스로 가능", "준비 도움", "입에 넣어드림", "콧줄 식사"];
    caregiver_gender: string[] = ["여자만", "되도록 여자", "남자만", "되도록 남자", "상관없음"];
    check_week: boolean[] = [false, false, false, false, false, false, false];
    week_value: string[] = ["월", "화", "수", "목", "금", "토", "일"];
    matching_start: boolean = false;
    city_count: number = 0;
    ward_count: number = 0;

    constructor(public api_giver: CaregiverService, private api_taker: CaretakerService, private api_consult: ConsultService) {

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
        this.giver.year = 0;
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
        this.giver.personality = '';
    }

    new_taker() {
        this.taker.id = null;
        this.taker.createdAt = null;
        this.taker.protector = '';
        this.taker.taker = '';
        this.taker.phone = '';
        this.taker.gender = false;
        this.taker.age = 0;
        this.taker.level = '';
        this.taker.city = '';
        this.taker.ward = '';
        this.taker.address = '';
        this.taker.active = '';
        this.taker.restroom = '';
        this.taker.diaper = '미착용';
        this.taker.diaperText = '';
        this.taker.weight = 0;
        this.taker.disease = '';
        this.taker.meal = '';
        this.taker.avoidFood = '';
        this.taker.recognition = '';
        this.taker.sexRelated = '';
        this.taker.houseSize = '';
        this.taker.inmate = '';
        this.taker.pet = '';
        this.taker.nowCaregiver = '';
        this.taker.religion = '';
        this.taker.serviceTime = '';
        this.taker.interviewTime = '';
        this.taker.caregiverGender = '';
        this.taker.hopeService = '';
        this.taker.hopeCaregiver = '';
        this.taker.writer = '';
    };

    giver_load($event: any) {
        if(this.search===true) {
            if(this.searchType_giver==='통합'){
                this.api_giver.caregiver.getSearchCaregiver(this.search_text_giver, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType_giver==='번호'){
                this.api_giver.caregiver.getSearchNumberCaregiver(this.search_text_giver, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType_giver==='지역'){
                this.api_giver.caregiver.getSearchAreaCaregiver(this.search_text_giver, $event, 7).subscribe( data => this.giver_data = data);
                return;
            } else if(this.searchType_giver==='이름'){
                this.api_giver.caregiver.getSearchNameCaregiver(this.search_text_giver, $event, 7).subscribe( data => this.giver_data = data);
                return;
            }
        } else{
            this.api_giver.caregiver.getCaregiverList($event, 7).subscribe(data => this.giver_data = data);
        }
    }

    matching_load(city: string, ward: string, $event: any){
        this.api_giver.caregiver.getMatchingCaregiver(city, ward, $event, 30).subscribe(data => this.matching_data = data);
    }

    taker_load($event: any) {
        if(this.search===true){
            if(this.searchType_taker==='통합'){
                this.api_taker.caretaker.getSearchCaretaker(this.search_text_taker, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType_taker==='번호'){
                this.api_taker.caretaker.getSearchNumberCaretaker(this.search_text_taker, $event, 7).subscribe( data => this.taker_data = data);
                return;
            } else if(this.searchType_taker==='지역'){
                this.api_taker.caretaker.getSearchAreaCaretaker(this.search_text_taker, $event, 7).subscribe( data => this.taker_data = data);
                return;
            }
        } else{
            this.api_taker.caretaker.getCaretakerList($event, 7).subscribe(data => this.taker_data = data);
        }
    }

    consult_load($event: any) {
        this.api_consult.consult.getStateConsult('일반_구인요청', $event, 7).subscribe(data => this.visit_jobOffer = data);
    }

    matching(city: string, ward: string){
        this.api_giver.caregiver.getMatchingCaregiver(city, ward, 0, 30).subscribe(data => this.matching_data = data);
    }

    delete_giver(item: Caregiver) {
        this.api_giver.caregiver.deleteCaregiver(item.id).subscribe(() => {
            this.giver_data.content.remove(item);
        });
    }

    delete_taker(item: Caretaker) {
        this.api_taker.caretaker.deleteCaretaker(item.id).subscribe(() => {
            this.taker_data.content.remove(item);
        });
    }

    getSearchGiver(searchType: string, search_text: string){
        if(searchType==='통합'){
            this.api_giver.caregiver.getSearchCaregiver(search_text, 0, 7).subscribe( data => this.giver_data = data );
        } else if(searchType==='번호'){
            if(search_text.length>=1){
                this.api_giver.caregiver.getSearchNumberCaregiver(search_text, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='지역'){
            if(search_text.length>=1){
                this.api_giver.caregiver.getSearchAreaCaregiver(search_text, 0, 7).subscribe( data => this.giver_data = data );
            }
        } else if(searchType==='이름'){
            if(search_text.length>=1){
                this.api_giver.caregiver.getSearchNameCaregiver(search_text, 0, 7).subscribe(data => this.giver_data = data);
            }
        }
        if(search_text.length>=1){
            this.search=true
        } else {
            this.giver_load(0);
            this.search=false
        }
    }

    getSearchTaker(searchType: string, search_text: string){
        if(searchType==='통합'){
            this.api_taker.caretaker.getSearchCaretaker(search_text, 0, 7).subscribe( data => this.taker_data = data );
        } else if(searchType==='번호'){
            if(search_text.length>=1){
                this.api_taker.caretaker.getSearchNumberCaretaker(search_text, 0, 7).subscribe( data => this.taker_data = data );
            }
        } else if(searchType==='지역'){
            if(search_text.length>=1){
                this.api_taker.caretaker.getSearchAreaCaretaker(search_text, 0, 7).subscribe( data => this.taker_data = data );
            }
        }
        if(search_text.length>=1){
            this.search=true
        } else {
            this.taker_load(0);
            this.search=false
        }
    }

    save_giver(item: Caregiver) {
        this.api_giver.caregiver.saveCaregiver(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

    save_taker(item: Caretaker) {
        this.api_taker.caretaker.saveCaretaker(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

    download(table: HTMLTableElement) {
        TableToExcel.convert(table, {
            name: '매칭요보사 리스트.xlsx',
            sheet: {
                name: '매칭요보사 리스트'
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

    taker_add(item: Consult){
        this.new_taker();
        this.taker.city=item.city;
        this.taker.ward=item.hole;
        this.taker.phone=item.phone;
        this.taker.protector=item.give;
        this.taker.taker=item.take;
        this.taker_save=true;
    }

    week_check(value: string){
        if(value==='전체'){
            for (let i=0; i<this.check_week.length; i++){
                this.check_week[i]=true;
            }
        } else if(value==='주말'){
            this.check_week[0]=true;
            this.check_week[6]=true;
            for (let i=1; i<6; i++){
                this.check_week[i]=false;
            }
        } else if(value==='평일'){
            for (let i=1; i<6; i++){
                this.check_week[i]=true;
            }
            this.check_week[0]=false;
            this.check_week[6]=false;
        } else{
            for (let i=0; i<this.check_week.length; i++){
                this.check_week[i]=false;
            }
        }
    }

    week_true_check(): boolean{
        for(let i=0; i<this.check_week.length; i++){
            if(this.check_week[i]===true){
                return true;
            }
        }
        return false
    }

    week_valueAdd(){
        for (let i=0; i<this.check_week.length; i++){
            if(this.check_week[i]===true){
                this.giver.weekend+=this.week_value[i];
            }
        }
    }

    week_checkAdd(item: Caregiver){
        if(item.weekend===null){
            return
        }
        for (let i=0; i<this.check_week.length; i++){
            this.check_week[i] = this.giver.weekend.includes(this.week_value[i]);
        }
    }

    city_ward_count(){
        this.api_giver.caregiver.getCityCount(this.taker.city).subscribe( count => this.city_count = count);
        this.api_giver.caregiver.getWardCount(this.taker.city,this.taker.ward).subscribe( count => this.ward_count = count);
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

        if(this.taker.city==='강원'){
            this.ward=this.gangwon;
        } else if(this.taker.city==='경기'){
            this.ward=this.gyeonggi;
        } else if(this.taker.city==='경남'){
            this.ward=this.gyeongnam;
        } else if(this.taker.city==='경북'){
            this.ward=this.gyeongbuk;
        } else if(this.taker.city==='광주'){
            this.ward=this.gwangju;
        } else if(this.taker.city==='대구'){
            this.ward=this.daegu;
        } else if(this.taker.city==='대전'){
            this.ward=this.daejeon;
        } else if(this.taker.city==='부산'){
            this.ward=this.busan;
        } else if(this.taker.city==='서울'){
            this.ward=this.seoul;
        } else if(this.taker.city==='세종'){
            this.ward=this.sejong;
        } else if(this.taker.city==='울산'){
            this.ward=this.ulsan;
        } else if(this.taker.city==='인천'){
            this.ward=this.incheon;
        } else if(this.taker.city==='전남'){
            this.ward=this.junnam;
        } else if(this.taker.city==='전북'){
            this.ward=this.junbuk;
        } else if(this.taker.city==='제주'){
            this.ward=this.jeju;
        } else if(this.taker.city==='충남'){
            this.ward=this.chungnam;
        } else if(this.taker.city==='충북'){
            this.ward=this.chungbuk;
        }
    }

    statistics_data_load(){
        this.api_giver.caregiver.getStatisticsList().subscribe( list => this.statistics_data = list);
    }

    statistics_start() {
        this.api_giver.caregiver.getCount().subscribe(count => this.giver_count = count)
        this.api_giver.caregiver.getCityCount('경기').subscribe( count => this.statistics_city.gyeonggi = count);
        this.api_giver.caregiver.getWardCount('경기','고양시').subscribe( count => this.statistics_ward.gyeonggi_goyang = count);
        this.api_giver.caregiver.getWardCount('경기','과천시').subscribe( count => this.statistics_ward.gyeonggi_gwacheon = count);
        this.api_giver.caregiver.getWardCount('경기','광명시').subscribe( count => this.statistics_ward.gyeonggi_gwangmyeong = count);
        this.api_giver.caregiver.getWardCount('경기','광주시').subscribe( count => this.statistics_ward.gyeonggi_gwangju = count);
        this.api_giver.caregiver.getWardCount('경기','구리시').subscribe( count => this.statistics_ward.gyeonggi_guri = count);
        this.api_giver.caregiver.getWardCount('경기','군포시').subscribe( count => this.statistics_ward.gyeonggi_gunpo = count);
        this.api_giver.caregiver.getWardCount('경기','김포시').subscribe( count => this.statistics_ward.gyeonggi_gimpo = count);
        this.api_giver.caregiver.getWardCount('경기','남양주시').subscribe( count => this.statistics_ward.gyeonggi_namyangju = count);
        this.api_giver.caregiver.getWardCount('경기','동두천시').subscribe( count => this.statistics_ward.gyeonggi_dongducheon = count);
        this.api_giver.caregiver.getWardCount('경기','부천시').subscribe( count => this.statistics_ward.gyeonggi_bucheon = count);
        this.api_giver.caregiver.getWardCount('경기','성남시').subscribe( count => this.statistics_ward.gyeonggi_seongnam = count);
        this.api_giver.caregiver.getWardCount('경기','수원시').subscribe( count => this.statistics_ward.gyeonggi_suwon = count);
        this.api_giver.caregiver.getWardCount('경기','시흥시').subscribe( count => this.statistics_ward.gyeonggi_siheung = count);
        this.api_giver.caregiver.getWardCount('경기','안산시').subscribe( count => this.statistics_ward.gyeonggi_ansan = count);
        this.api_giver.caregiver.getWardCount('경기','안성시').subscribe( count => this.statistics_ward.gyeonggi_anseong = count);
        this.api_giver.caregiver.getWardCount('경기','안양시').subscribe( count => this.statistics_ward.gyeonggi_anyang = count);
        this.api_giver.caregiver.getWardCount('경기','양주시').subscribe( count => this.statistics_ward.gyeonggi_yangju = count);
        this.api_giver.caregiver.getWardCount('경기','오산시').subscribe( count => this.statistics_ward.gyeonggi_osan = count);
        this.api_giver.caregiver.getWardCount('경기','용인시').subscribe( count => this.statistics_ward.gyeonggi_yongin = count);
        this.api_giver.caregiver.getWardCount('경기','의왕시').subscribe( count => this.statistics_ward.gyeonggi_uiwang = count);
        this.api_giver.caregiver.getWardCount('경기','의정부시').subscribe( count => this.statistics_ward.gyeonggi_uijeongbu = count);
        this.api_giver.caregiver.getWardCount('경기','이천시').subscribe( count => this.statistics_ward.gyeonggi_icheon = count);
        this.api_giver.caregiver.getWardCount('경기','파주시').subscribe( count => this.statistics_ward.gyeonggi_paju = count);
        this.api_giver.caregiver.getWardCount('경기','평택시').subscribe( count => this.statistics_ward.gyeonggi_pyeongtaeg = count);
        this.api_giver.caregiver.getWardCount('경기','포천시').subscribe( count => this.statistics_ward.gyeonggi_pocheon = count);
        this.api_giver.caregiver.getWardCount('경기','하남시').subscribe( count => this.statistics_ward.gyeonggi_hanam = count);
        this.api_giver.caregiver.getWardCount('경기','화성시').subscribe( count => this.statistics_ward.gyeonggi_hwaseong = count);
        this.api_giver.caregiver.getWardCount('경기','가평군').subscribe( count => this.statistics_ward.gyeonggi_gapyeong = count);
        this.api_giver.caregiver.getWardCount('경기','양평군').subscribe( count => this.statistics_ward.gyeonggi_yangpyeong = count);
        this.api_giver.caregiver.getWardCount('경기','여주군').subscribe( count => this.statistics_ward.gyeonggi_yeoju = count);
        this.api_giver.caregiver.getWardCount('경기','연천군').subscribe( count => this.statistics_ward.gyeonggi_yeoncheon = count);
        this.api_giver.caregiver.getCityCount('서울').subscribe( count => this.statistics_city.seoul = count);
        this.api_giver.caregiver.getWardCount('서울', '강남구').subscribe( count => this.statistics_ward.seoul_gangnam = count);
        this.api_giver.caregiver.getWardCount('서울', '강동구').subscribe( count => this.statistics_ward.seoul_gangdong = count);
        this.api_giver.caregiver.getWardCount('서울', '강북구').subscribe( count => this.statistics_ward.seoul_gangbug = count);
        this.api_giver.caregiver.getWardCount('서울', '강서구').subscribe( count => this.statistics_ward.seoul_gangseo = count);
        this.api_giver.caregiver.getWardCount('서울', '관악구').subscribe( count => this.statistics_ward.seoul_gwanag = count);
        this.api_giver.caregiver.getWardCount('서울', '광진구').subscribe( count => this.statistics_ward.seoul_gwangjin = count);
        this.api_giver.caregiver.getWardCount('서울', '구로구').subscribe( count => this.statistics_ward.seoul_guro = count);
        this.api_giver.caregiver.getWardCount('서울', '금천구').subscribe( count => this.statistics_ward.seoul_geumcheon = count);
        this.api_giver.caregiver.getWardCount('서울', '노원구').subscribe( count => this.statistics_ward.seoul_nowon = count);
        this.api_giver.caregiver.getWardCount('서울', '도봉구').subscribe( count => this.statistics_ward.seoul_dobong = count);
        this.api_giver.caregiver.getWardCount('서울', '동대문구').subscribe( count => this.statistics_ward.seoul_dongdaemun = count);
        this.api_giver.caregiver.getWardCount('서울', '동작구').subscribe( count => this.statistics_ward.seoul_dongjag = count);
        this.api_giver.caregiver.getWardCount('서울', '마포구').subscribe( count => this.statistics_ward.seoul_mapo = count);
        this.api_giver.caregiver.getWardCount('서울', '서대문구').subscribe( count => this.statistics_ward.seoul_seodaemun = count);
        this.api_giver.caregiver.getWardCount('서울', '서초구').subscribe( count => this.statistics_ward.seoul_seocho = count);
        this.api_giver.caregiver.getWardCount('서울', '성동구').subscribe( count => this.statistics_ward.seoul_seongdong = count);
        this.api_giver.caregiver.getWardCount('서울', '성북구').subscribe( count => this.statistics_ward.seoul_seongbug = count);
        this.api_giver.caregiver.getWardCount('서울', '송파구').subscribe( count => this.statistics_ward.seoul_songpa = count);
        this.api_giver.caregiver.getWardCount('서울', '양천구').subscribe( count => this.statistics_ward.seoul_yangcheon = count);
        this.api_giver.caregiver.getWardCount('서울', '영등포구').subscribe( count => this.statistics_ward.seoul_yeongdeungpo = count);
        this.api_giver.caregiver.getWardCount('서울', '용산구').subscribe( count => this.statistics_ward.seoul_yongsan = count);
        this.api_giver.caregiver.getWardCount('서울', '은평구').subscribe( count => this.statistics_ward.seoul_eunpyeong = count);
        this.api_giver.caregiver.getWardCount('서울', '종로구').subscribe( count => this.statistics_ward.seoul_jongro = count);
        this.api_giver.caregiver.getWardCount('서울', '중구').subscribe( count => this.statistics_ward.seoul_jung = count);
        this.api_giver.caregiver.getWardCount('서울', '중랑구').subscribe( count => this.statistics_ward.seoul_jungrang = count);
        this.api_giver.caregiver.getCityCount('부산').subscribe( count => this.statistics_city.busan = count);
        this.api_giver.caregiver.getWardCount('부산', '강서구').subscribe( count => this.statistics_ward.busan_gangseo = count);
        this.api_giver.caregiver.getWardCount('부산', '금정구').subscribe( count => this.statistics_ward.busan_geumjeong = count);
        this.api_giver.caregiver.getWardCount('부산', '남구').subscribe( count => this.statistics_ward.busan_south = count);
        this.api_giver.caregiver.getWardCount('부산', '동구').subscribe( count => this.statistics_ward.busan_east = count);
        this.api_giver.caregiver.getWardCount('부산', '동래구').subscribe( count => this.statistics_ward.busan_dongrae = count);
        this.api_giver.caregiver.getWardCount('부산', '부산진구').subscribe( count => this.statistics_ward.busan_busanjin = count);
        this.api_giver.caregiver.getWardCount('부산', '북구').subscribe( count => this.statistics_ward.busan_north = count);
        this.api_giver.caregiver.getWardCount('부산', '사상구').subscribe( count => this.statistics_ward.busan_sasang = count);
        this.api_giver.caregiver.getWardCount('부산', '사하구').subscribe( count => this.statistics_ward.busan_saha = count);
        this.api_giver.caregiver.getWardCount('부산', '서구').subscribe( count => this.statistics_ward.busan_wast = count);
        this.api_giver.caregiver.getWardCount('부산', '수영구').subscribe( count => this.statistics_ward.busan_suyeong = count);
        this.api_giver.caregiver.getWardCount('부산', '연제구').subscribe( count => this.statistics_ward.busan_yeonje = count);
        this.api_giver.caregiver.getWardCount('부산', '영도구').subscribe( count => this.statistics_ward.busan_yeongdo = count);
        this.api_giver.caregiver.getWardCount('부산', '중구').subscribe( count => this.statistics_ward.busan_jung = count);
        this.api_giver.caregiver.getWardCount('부산', '해운대구').subscribe( count => this.statistics_ward.busan_haeundae = count);
        this.api_giver.caregiver.getWardCount('부산', '기장군').subscribe( count => this.statistics_ward.busan_gijang = count);
        this.api_giver.caregiver.getCityCount('인천').subscribe( count => this.statistics_city.incheon = count);
        this.api_giver.caregiver.getWardCount('인천', '계양구').subscribe( count => this.statistics_ward.incheon_gyeyang = count);
        this.api_giver.caregiver.getWardCount('인천', '남동구').subscribe( count => this.statistics_ward.incheon_namdong = count);
        this.api_giver.caregiver.getWardCount('인천', '동구').subscribe( count => this.statistics_ward.incheon_east = count);
        this.api_giver.caregiver.getWardCount('인천', '미추홀구').subscribe( count => this.statistics_ward.incheon_michuhol = count);
        this.api_giver.caregiver.getWardCount('인천', '부평구').subscribe( count => this.statistics_ward.incheon_bupyeong = count);
        this.api_giver.caregiver.getWardCount('인천', '서구').subscribe( count => this.statistics_ward.incheon_wast = count);
        this.api_giver.caregiver.getWardCount('인천', '연수구').subscribe( count => this.statistics_ward.incheon_yeonsu = count);
        this.api_giver.caregiver.getWardCount('인천', '중구').subscribe( count => this.statistics_ward.incheon_jung = count);
        this.api_giver.caregiver.getWardCount('인천', '강화군').subscribe( count => this.statistics_ward.incheon_ganghwa = count);
        this.api_giver.caregiver.getWardCount('인천', '옹진군').subscribe( count => this.statistics_ward.incheon_ongjin = count);
        this.api_giver.caregiver.getCityCount('경남').subscribe( count => this.statistics_city.gyeongnam = count);
        this.api_giver.caregiver.getWardCount('경남', '거제시').subscribe( count => this.statistics_ward.gyeongnam_geoje = count);
        this.api_giver.caregiver.getWardCount('경남', '김해시').subscribe( count => this.statistics_ward.gyeongnam_gimhae = count);
        this.api_giver.caregiver.getWardCount('경남', '밀양시').subscribe( count => this.statistics_ward.gyeongnam_milyang = count);
        this.api_giver.caregiver.getWardCount('경남', '사천시').subscribe( count => this.statistics_ward.gyeongnam_sacheon = count);
        this.api_giver.caregiver.getWardCount('경남', '양산시').subscribe( count => this.statistics_ward.gyeongnam_yangsan = count);
        this.api_giver.caregiver.getWardCount('경남', '진주시').subscribe( count => this.statistics_ward.gyeongnam_jinju = count);
        this.api_giver.caregiver.getWardCount('경남', '창원시').subscribe( count => this.statistics_ward.gyeongnam_changwon = count);
        this.api_giver.caregiver.getWardCount('경남', '통영시').subscribe( count => this.statistics_ward.gyeongnam_tongyeong = count);
        this.api_giver.caregiver.getWardCount('경남', '거창군').subscribe( count => this.statistics_ward.gyeongnam_geochang = count);
        this.api_giver.caregiver.getWardCount('경남', '고성군').subscribe( count => this.statistics_ward.gyeongnam_goseong = count);
        this.api_giver.caregiver.getWardCount('경남', '남해군').subscribe( count => this.statistics_ward.gyeongnam_namhae = count);
        this.api_giver.caregiver.getWardCount('경남', '산청군').subscribe( count => this.statistics_ward.gyeongnam_sancheong = count);
        this.api_giver.caregiver.getWardCount('경남', '의령군').subscribe( count => this.statistics_ward.gyeongnam_uilyeong = count);
        this.api_giver.caregiver.getWardCount('경남', '창녕군').subscribe( count => this.statistics_ward.gyeongnam_changnyeong = count);
        this.api_giver.caregiver.getWardCount('경남', '하동군').subscribe( count => this.statistics_ward.gyeongnam_hadong = count);
        this.api_giver.caregiver.getWardCount('경남', '함안군').subscribe( count => this.statistics_ward.gyeongnam_haman = count);
        this.api_giver.caregiver.getWardCount('경남', '함양군').subscribe( count => this.statistics_ward.gyeongnam_hamyang = count);
        this.api_giver.caregiver.getWardCount('경남', '합천군').subscribe( count => this.statistics_ward.gyeongnam_habcheon = count);
        this.api_giver.caregiver.getCityCount('대구').subscribe( count => this.statistics_city.daegu = count);
        this.api_giver.caregiver.getWardCount('대구', '남구').subscribe( count => this.statistics_ward.daegu_south = count);
        this.api_giver.caregiver.getWardCount('대구', '달서구').subscribe( count => this.statistics_ward.daegu_dalseo = count);
        this.api_giver.caregiver.getWardCount('대구', '동구').subscribe( count => this.statistics_ward.daegu_east = count);
        this.api_giver.caregiver.getWardCount('대구', '북구').subscribe( count => this.statistics_ward.daegu_north = count);
        this.api_giver.caregiver.getWardCount('대구', '서구').subscribe( count => this.statistics_ward.daegu_wast = count);
        this.api_giver.caregiver.getWardCount('대구', '수성구').subscribe( count => this.statistics_ward.daegu_suseong = count);
        this.api_giver.caregiver.getWardCount('대구', '중구').subscribe( count => this.statistics_ward.daegu_jung = count);
        this.api_giver.caregiver.getWardCount('대구', '달성군').subscribe( count => this.statistics_ward.daegu_dalseong = count);
        this.api_giver.caregiver.getCityCount('경북').subscribe( count => this.statistics_city.gyeongbuk = count);
        this.api_giver.caregiver.getWardCount('경북', '경산시').subscribe( count => this.statistics_ward.gyeongbuk_gyeongsan = count);
        this.api_giver.caregiver.getWardCount('경북', '경주시').subscribe( count => this.statistics_ward.gyeongbuk_gyeongju = count);
        this.api_giver.caregiver.getWardCount('경북', '구미시').subscribe( count => this.statistics_ward.gyeongbuk_gumi = count);
        this.api_giver.caregiver.getWardCount('경북', '김천시').subscribe( count => this.statistics_ward.gyeongbuk_gimcheon = count);
        this.api_giver.caregiver.getWardCount('경북', '문경시').subscribe( count => this.statistics_ward.gyeongbuk_mungyeong = count);
        this.api_giver.caregiver.getWardCount('경북', '상주시').subscribe( count => this.statistics_ward.gyeongbuk_sangju = count);
        this.api_giver.caregiver.getWardCount('경북', '안동시').subscribe( count => this.statistics_ward.gyeongbuk_andong = count);
        this.api_giver.caregiver.getWardCount('경북', '영주시').subscribe( count => this.statistics_ward.gyeongbuk_yeongju = count);
        this.api_giver.caregiver.getWardCount('경북', '영천시').subscribe( count => this.statistics_ward.gyeongbuk_yeongcheon = count);
        this.api_giver.caregiver.getWardCount('경북', '포항시').subscribe( count => this.statistics_ward.gyeongbuk_pohang = count);
        this.api_giver.caregiver.getWardCount('경북', '고령군').subscribe( count => this.statistics_ward.gyeongbuk_golyeong = count);
        this.api_giver.caregiver.getWardCount('경북', '군위군').subscribe( count => this.statistics_ward.gyeongbuk_gunwi = count);
        this.api_giver.caregiver.getWardCount('경북', '봉화군').subscribe( count => this.statistics_ward.gyeongbuk_bonghwa = count);
        this.api_giver.caregiver.getWardCount('경북', '성주군').subscribe( count => this.statistics_ward.gyeongbuk_seongju = count);
        this.api_giver.caregiver.getWardCount('경북', '영덕군').subscribe( count => this.statistics_ward.gyeongbuk_yeongdeog = count);
        this.api_giver.caregiver.getWardCount('경북', '영양군').subscribe( count => this.statistics_ward.gyeongbuk_yeongyang = count);
        this.api_giver.caregiver.getWardCount('경북', '예천군').subscribe( count => this.statistics_ward.gyeongbuk_yecheon = count);
        this.api_giver.caregiver.getWardCount('경북', '울릉군').subscribe( count => this.statistics_ward.gyeongbuk_ulleung = count);
        this.api_giver.caregiver.getWardCount('경북', '울진군').subscribe( count => this.statistics_ward.gyeongbuk_uljin = count);
        this.api_giver.caregiver.getWardCount('경북', '의성군').subscribe( count => this.statistics_ward.gyeongbuk_uiseong = count);
        this.api_giver.caregiver.getWardCount('경북', '청도군').subscribe( count => this.statistics_ward.gyeongbuk_cheongdo = count);
        this.api_giver.caregiver.getWardCount('경북', '청송군').subscribe( count => this.statistics_ward.gyeongbuk_cheongsong = count);
        this.api_giver.caregiver.getWardCount('경북', '칠곡군').subscribe( count => this.statistics_ward.gyeongbuk_chilgog = count);
        this.api_giver.caregiver.getCityCount('대전').subscribe( count => this.statistics_city.daejeon = count);
        this.api_giver.caregiver.getWardCount('대전', '대덕구').subscribe( count => this.statistics_ward.daejeon_daedeog = count);
        this.api_giver.caregiver.getWardCount('대전', '동구').subscribe( count => this.statistics_ward.daejeon_east = count);
        this.api_giver.caregiver.getWardCount('대전', '서구').subscribe( count => this.statistics_ward.daejeon_wast = count);
        this.api_giver.caregiver.getWardCount('대전', '유성구').subscribe( count => this.statistics_ward.daejeon_yuseong = count);
        this.api_giver.caregiver.getWardCount('대전', '중구').subscribe( count => this.statistics_ward.daejeon_jung = count);
        this.api_giver.caregiver.getCityCount('전남').subscribe( count => this.statistics_city.junnam = count);
        this.api_giver.caregiver.getWardCount('전남', '광양시').subscribe( count => this.statistics_ward.junnam_gwangyang = count);
        this.api_giver.caregiver.getWardCount('전남', '나주시').subscribe( count => this.statistics_ward.junnam_naju = count);
        this.api_giver.caregiver.getWardCount('전남', '목포시').subscribe( count => this.statistics_ward.junnam_mokpo = count);
        this.api_giver.caregiver.getWardCount('전남', '순천시').subscribe( count => this.statistics_ward.junnam_suncheon = count);
        this.api_giver.caregiver.getWardCount('전남', '여수시').subscribe( count => this.statistics_ward.junnam_yeosu = count);
        this.api_giver.caregiver.getWardCount('전남', '강진군').subscribe( count => this.statistics_ward.junnam_gangjin = count);
        this.api_giver.caregiver.getWardCount('전남', '고흥군').subscribe( count => this.statistics_ward.junnam_goheung = count);
        this.api_giver.caregiver.getWardCount('전남', '곡성군').subscribe( count => this.statistics_ward.junnam_gogseong = count);
        this.api_giver.caregiver.getWardCount('전남', '구례군').subscribe( count => this.statistics_ward.junnam_gurye = count);
        this.api_giver.caregiver.getWardCount('전남', '담양군').subscribe( count => this.statistics_ward.junnam_damyang = count);
        this.api_giver.caregiver.getWardCount('전남', '무안군').subscribe( count => this.statistics_ward.junnam_muangun = count);
        this.api_giver.caregiver.getWardCount('전남', '보성군').subscribe( count => this.statistics_ward.junnam_boseong = count);
        this.api_giver.caregiver.getWardCount('전남', '신안군').subscribe( count => this.statistics_ward.junnam_sinan = count);
        this.api_giver.caregiver.getWardCount('전남', '영광군').subscribe( count => this.statistics_ward.junnam_yeonggwang = count);
        this.api_giver.caregiver.getWardCount('전남', '영암군').subscribe( count => this.statistics_ward.junnam_yeongam = count);
        this.api_giver.caregiver.getWardCount('전남', '완도군').subscribe( count => this.statistics_ward.junnam_wando = count);
        this.api_giver.caregiver.getWardCount('전남', '장성군').subscribe( count => this.statistics_ward.junnam_jangseong = count);
        this.api_giver.caregiver.getWardCount('전남', '장흥군').subscribe( count => this.statistics_ward.junnam_jangheung = count);
        this.api_giver.caregiver.getWardCount('전남', '진도군').subscribe( count => this.statistics_ward.junnam_jindo = count);
        this.api_giver.caregiver.getWardCount('전남', '함평군').subscribe( count => this.statistics_ward.junnam_hampyeong = count);
        this.api_giver.caregiver.getWardCount('전남', '해남군').subscribe( count => this.statistics_ward.junnam_haenam = count);
        this.api_giver.caregiver.getWardCount('전남', '화순군').subscribe( count => this.statistics_ward.junnam_hwasun = count);
        this.api_giver.caregiver.getCityCount('전북').subscribe( count => this.statistics_city.junbuk = count);
        this.api_giver.caregiver.getWardCount('전북', '군산시').subscribe( count => this.statistics_ward.junbuk_gunsan = count);
        this.api_giver.caregiver.getWardCount('전북', '김제시').subscribe( count => this.statistics_ward.junbuk_gimje = count);
        this.api_giver.caregiver.getWardCount('전북', '남원시').subscribe( count => this.statistics_ward.junbuk_namwon = count);
        this.api_giver.caregiver.getWardCount('전북', '익산시').subscribe( count => this.statistics_ward.junbuk_igsan = count);
        this.api_giver.caregiver.getWardCount('전북', '전주시').subscribe( count => this.statistics_ward.junbuk_jeonju = count);
        this.api_giver.caregiver.getWardCount('전북', '정읍시').subscribe( count => this.statistics_ward.junbuk_jeongeub = count);
        this.api_giver.caregiver.getWardCount('전북', '고창군').subscribe( count => this.statistics_ward.junbuk_gochang = count);
        this.api_giver.caregiver.getWardCount('전북', '무주군').subscribe( count => this.statistics_ward.junbuk_muju = count);
        this.api_giver.caregiver.getWardCount('전북', '부안군').subscribe( count => this.statistics_ward.junbuk_buan = count);
        this.api_giver.caregiver.getWardCount('전북', '순창군').subscribe( count => this.statistics_ward.junbuk_sunchang = count);
        this.api_giver.caregiver.getWardCount('전북', '완주군').subscribe( count => this.statistics_ward.junbuk_wanju = count);
        this.api_giver.caregiver.getWardCount('전북', '임실군').subscribe( count => this.statistics_ward.junbuk_imsil = count);
        this.api_giver.caregiver.getWardCount('전북', '장수군').subscribe( count => this.statistics_ward.junbuk_jangsu = count);
        this.api_giver.caregiver.getWardCount('전북', '진안군').subscribe( count => this.statistics_ward.junbuk_jinan = count);
        this.api_giver.caregiver.getCityCount('광주').subscribe( count => this.statistics_city.gwangju = count);
        this.api_giver.caregiver.getWardCount('광주', '광산구').subscribe( count => this.statistics_ward.gwangju_gwangsan = count);
        this.api_giver.caregiver.getWardCount('광주', '남구').subscribe( count => this.statistics_ward.gwangju_south = count);
        this.api_giver.caregiver.getWardCount('광주', '동구').subscribe( count => this.statistics_ward.gwangju_east = count);
        this.api_giver.caregiver.getWardCount('광주', '북구').subscribe( count => this.statistics_ward.gwangju_north = count);
        this.api_giver.caregiver.getWardCount('광주', '서구').subscribe( count => this.statistics_ward.gwangju_wast = count);
        this.api_giver.caregiver.getCityCount('충남').subscribe( count => this.statistics_city.chungnam = count);
        this.api_giver.caregiver.getWardCount('충남', '계룡시').subscribe( count => this.statistics_ward.chungnam_gyeryong = count);
        this.api_giver.caregiver.getWardCount('충남', '공주시').subscribe( count => this.statistics_ward.chungnam_gongju = count);
        this.api_giver.caregiver.getWardCount('충남', '논산시').subscribe( count => this.statistics_ward.chungnam_nonsan = count);
        this.api_giver.caregiver.getWardCount('충남', '당진시').subscribe( count => this.statistics_ward.chungnam_dangjin = count);
        this.api_giver.caregiver.getWardCount('충남', '보령시').subscribe( count => this.statistics_ward.chungnam_boryeong = count);
        this.api_giver.caregiver.getWardCount('충남', '서산시').subscribe( count => this.statistics_ward.chungnam_seosan = count);
        this.api_giver.caregiver.getWardCount('충남', '아산시').subscribe( count => this.statistics_ward.chungnam_asan = count);
        this.api_giver.caregiver.getWardCount('충남', '천안시').subscribe( count => this.statistics_ward.chungnam_cheonan = count);
        this.api_giver.caregiver.getWardCount('충남', '금산군').subscribe( count => this.statistics_ward.chungnam_geumsan = count);
        this.api_giver.caregiver.getWardCount('충남', '부여군').subscribe( count => this.statistics_ward.chungnam_buyeo = count);
        this.api_giver.caregiver.getWardCount('충남', '서천군').subscribe( count => this.statistics_ward.chungnam_seocheon = count);
        this.api_giver.caregiver.getWardCount('충남', '예산군').subscribe( count => this.statistics_ward.chungnam_yesan = count);
        this.api_giver.caregiver.getWardCount('충남', '청양군').subscribe( count => this.statistics_ward.chungnam_cheongyang = count);
        this.api_giver.caregiver.getWardCount('충남', '태안군').subscribe( count => this.statistics_ward.chungnam_taean = count);
        this.api_giver.caregiver.getWardCount('충남', '홍성군').subscribe( count => this.statistics_ward.chungnam_hongseong = count);
        this.api_giver.caregiver.getCityCount('강원').subscribe( count => this.statistics_city.gangwon = count);
        this.api_giver.caregiver.getWardCount('강원', '강릉시').subscribe( count => this.statistics_ward.gangwon_gangneung = count);
        this.api_giver.caregiver.getWardCount('강원', '동해시').subscribe( count => this.statistics_ward.gangwon_donghae = count);
        this.api_giver.caregiver.getWardCount('강원', '삼척시').subscribe( count => this.statistics_ward.gangwon_samcheok = count);
        this.api_giver.caregiver.getWardCount('강원', '속초시').subscribe( count => this.statistics_ward.gangwon_sokcho = count);
        this.api_giver.caregiver.getWardCount('강원', '원주시').subscribe( count => this.statistics_ward.gangwon_wonju = count);
        this.api_giver.caregiver.getWardCount('강원', '춘천시').subscribe( count => this.statistics_ward.gangwon_chuncheon = count);
        this.api_giver.caregiver.getWardCount('강원', '태백시').subscribe( count => this.statistics_ward.gangwon_taebaek = count);
        this.api_giver.caregiver.getWardCount('강원', '고성군').subscribe( count => this.statistics_ward.gangwon_goseong = count);
        this.api_giver.caregiver.getWardCount('강원', '양구군').subscribe( count => this.statistics_ward.gangwon_yanggu = count);
        this.api_giver.caregiver.getWardCount('강원', '양양군').subscribe( count => this.statistics_ward.gangwon_yangyang = count);
        this.api_giver.caregiver.getWardCount('강원', '영월군').subscribe( count => this.statistics_ward.gangwon_yeongwol = count);
        this.api_giver.caregiver.getWardCount('강원', '인제군').subscribe( count => this.statistics_ward.gangwon_inje = count);
        this.api_giver.caregiver.getWardCount('강원', '정선군').subscribe( count => this.statistics_ward.gangwon_jeongseon = count);
        this.api_giver.caregiver.getWardCount('강원', '철원군').subscribe( count => this.statistics_ward.gangwon_cheorwon = count);
        this.api_giver.caregiver.getWardCount('강원', '평창군').subscribe( count => this.statistics_ward.gangwon_pyeongchang = count);
        this.api_giver.caregiver.getWardCount('강원', '홍천군').subscribe( count => this.statistics_ward.gangwon_hongcheon = count);
        this.api_giver.caregiver.getWardCount('강원', '화천군').subscribe( count => this.statistics_ward.gangwon_hwacheon = count);
        this.api_giver.caregiver.getWardCount('강원', '횡성군').subscribe( count => this.statistics_ward.gangwon_hoengseong = count);
        this.api_giver.caregiver.getCityCount('충북').subscribe( count => this.statistics_city.chungbuk = count);
        this.api_giver.caregiver.getWardCount('충북', '제천시').subscribe( count => this.statistics_ward.chungbuk_jecheon = count);
        this.api_giver.caregiver.getWardCount('충북', '청주시').subscribe( count => this.statistics_ward.chungbuk_cheongju = count);
        this.api_giver.caregiver.getWardCount('충북', '충주시').subscribe( count => this.statistics_ward.chungbuk_chungju = count);
        this.api_giver.caregiver.getWardCount('충북', '괴산군').subscribe( count => this.statistics_ward.chungbuk_goesan = count);
        this.api_giver.caregiver.getWardCount('충북', '단양군').subscribe( count => this.statistics_ward.chungbuk_danyang = count);
        this.api_giver.caregiver.getWardCount('충북', '보은군').subscribe( count => this.statistics_ward.chungbuk_boeun = count);
        this.api_giver.caregiver.getWardCount('충북', '영동군').subscribe( count => this.statistics_ward.chungbuk_yeongdong = count);
        this.api_giver.caregiver.getWardCount('충북', '옥천군').subscribe( count => this.statistics_ward.chungbuk_ogcheon = count);
        this.api_giver.caregiver.getWardCount('충북', '음성군').subscribe( count => this.statistics_ward.chungbuk_eumseong = count);
        this.api_giver.caregiver.getWardCount('충북', '증평군').subscribe( count => this.statistics_ward.chungbuk_jeungpyeong = count);
        this.api_giver.caregiver.getWardCount('충북', '진천군').subscribe( count => this.statistics_ward.chungbuk_jincheon = count);
        this.api_giver.caregiver.getCityCount('울산').subscribe( count => this.statistics_city.ulsan = count);
        this.api_giver.caregiver.getWardCount('울산', '남구').subscribe( count => this.statistics_ward.ulsan_south = count);
        this.api_giver.caregiver.getWardCount('울산', '동구').subscribe( count => this.statistics_ward.ulsan_east = count);
        this.api_giver.caregiver.getWardCount('울산', '북구').subscribe( count => this.statistics_ward.ulsan_north = count);
        this.api_giver.caregiver.getWardCount('울산', '중구').subscribe( count => this.statistics_ward.ulsan_jung = count);
        this.api_giver.caregiver.getWardCount('울산', '울주군').subscribe( count => this.statistics_ward.ulsan_ulju = count);
        this.api_giver.caregiver.getCityCount('제주').subscribe( count => this.statistics_city.jeju = count);
        this.api_giver.caregiver.getWardCount('제주', '서귀포시').subscribe( count => this.statistics_ward.jeju_seogwipo = count);
        this.api_giver.caregiver.getWardCount('제주', '제주시').subscribe( count => this.statistics_ward.jeju_jeju = count);
        this.api_giver.caregiver.getCityCount('세종').subscribe( count => this.statistics_city.sejong = count);
        this.api_giver.caregiver.getWardCount('세종', '조치원읍').subscribe( count => this.statistics_ward.sejong_jochiwon = count);
        this.api_giver.caregiver.getWardCount('세종', '금남면').subscribe( count => this.statistics_ward.sejong_geumnam = count);
        this.api_giver.caregiver.getWardCount('세종', '부강면').subscribe( count => this.statistics_ward.sejong_bugang = count);
        this.api_giver.caregiver.getWardCount('세종', '소정면').subscribe( count => this.statistics_ward.sejong_sojeong = count);
        this.api_giver.caregiver.getWardCount('세종', '연기면').subscribe( count => this.statistics_ward.sejong_yeongi = count);
        this.api_giver.caregiver.getWardCount('세종', '연동면').subscribe( count => this.statistics_ward.sejong_yeondong = count);
        this.api_giver.caregiver.getWardCount('세종', '연서면').subscribe( count => this.statistics_ward.sejong_yeonseo = count);
        this.api_giver.caregiver.getWardCount('세종', '장군면').subscribe( count => this.statistics_ward.sejong_janggun = count);
        this.api_giver.caregiver.getWardCount('세종', '전동면').subscribe( count => this.statistics_ward.sejong_jeondong = count);
        this.api_giver.caregiver.getWardCount('세종', '전의면').subscribe( count => this.statistics_ward.sejong_jeonui = count);
        this.api_giver.caregiver.getWardCount('세종', '고운동').subscribe( count => this.statistics_ward.sejong_goun = count);
        this.api_giver.caregiver.getWardCount('세종', '다정동').subscribe( count => this.statistics_ward.sejong_dajeong = count);
        this.api_giver.caregiver.getWardCount('세종', '대평동').subscribe( count => this.statistics_ward.sejong_daepyeong = count);
        this.api_giver.caregiver.getWardCount('세종', '도담동').subscribe( count => this.statistics_ward.sejong_dodam = count);
        this.api_giver.caregiver.getWardCount('세종', '보람동').subscribe( count => this.statistics_ward.sejong_boram = count);
        this.api_giver.caregiver.getWardCount('세종', '새롬동').subscribe( count => this.statistics_ward.sejong_saerom = count);
        this.api_giver.caregiver.getWardCount('세종', '소담동').subscribe( count => this.statistics_ward.sejong_sodam = count);
        this.api_giver.caregiver.getWardCount('세종', '아름동').subscribe( count => this.statistics_ward.sejong_areum = count);
        this.api_giver.caregiver.getWardCount('세종', '증촌동').subscribe( count => this.statistics_ward.sejong_jongchon = count);
        this.api_giver.caregiver.getWardCount('세종', '한솔동').subscribe( count => this.statistics_ward.sejong_hansol = count);
    }
}
