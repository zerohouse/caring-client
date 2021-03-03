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
    today: string = new Date().toISOString().substring(0, 10);
    list: Consult[];
    meta_data: Page<Consult>;
    user: Consult = {
        state: '',
        progress: '',
        city: '',
        hole: '',
        phone: '',
        give: '',
        take: '',
        phone2: '',
        giveName: '',
        takeName: '',
        level: '',
        now: '',
        memo: '',
        come: '',
        first: '',
        start: '',
        end: '',
        deleteReason: '',
        id: null,
        createdAt: null,
        lastModifiedDate: '',
        direct: false,
        csComplete: false,
        firstOrder: false,
    };
    state: string;
    state_list: string[] = [
        "가족_진행중(1~4급)", "가족_등급신청중", "가족_완료",
        "가족_5급", "가족_서비스시작", "일반_구인요청",
        "일반_구직문의", "일반_소개", "기타_자격증 / 교육원 문의",
        "기타_등급신청 문의", "부재 & 통화요망", "종료/보류",
        "기타/복지용구", "홈페이지 예약"
    ];
    progress: string;
    progress_list: string[] = ["진행요망", "진행중",
        "수시확인", "보류"
    ];
    search: string;
    memo: string;
    date: string;
    searchType: string = '통합';
    searchType_list: string[] = [
        "통합", "시/도", "시/군/구", "번호",
        "보호자", "대상자", "등급", "현재상황",
        "상담내용", "유입", "상담자", "시작날",
        "계약날"
    ];
    searchOn: string = '기본';
    inflow_list: string[] = [
        "유튜브", "인터넷", "전단지", "홈페이지",
        "네이버", "카톡", "메리츠", "기타"
    ];
    counselor_list: string[] = [
        "김세진", "이건희", "이세은", "임규경", "전아영"
    ];
    statistics: boolean = false;
    contract: boolean = false;
    saves: boolean = false;
    check: boolean = false;
    date_check: boolean = false;
    three_date_check: boolean = false;
    cs_check: boolean = false;
    message_send: boolean = false;
    change: boolean = false;
    admin: boolean = false;
    check_delete: boolean = false;
    all_date: boolean = false;
    phone_check: boolean = false;
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

    calls: number;
    recalls: number;
    recalls_survice: number;
    internet : number;
    leaflet : number;
    naver : number;
    youtube : number;
    gooddak : number;
    homepage : number;
    introduction : number;
    erich : number;
    corporation : number;
    article : number;
    blog: number;
    daum: number;
    katalk: number;
    feed_paper: number;
    etc: number;
    internet_survice : number;
    leaflet_survice : number;
    naver_survice : number;
    youtube_survice : number;
    gooddak_survice : number;
    homepage_survice : number;
    introduction_survice : number;
    erich_survice : number;
    corporation_survice : number;
    article_survice : number;
    blog_survice: number;
    daum_survice: number;
    katalk_survice: number;
    feed_paper_survice: number;
    etc_survice: number;
    seoul_call: number;
    gyeonggi_call: number;
    incheon_call: number;
    gangwon_call: number;
    chungbuk_call: number;
    chungnam_call: number;
    gyeongbuk_call: number;
    gyeongnam_call: number;
    junbuk_call: number;
    junnam_call: number;
    daejeon_call: number;
    daegu_call: number;
    gwangju_call: number;
    busan_call: number;
    ulsan_call: number;
    jeju_call: number;
    etc_city_call: number;
    seoul_leaflet: number;
    gyeonggi_leaflet: number;
    incheon_leaflet: number;
    gangwon_leaflet: number;
    chungbuk_leaflet: number;
    chungnam_leaflet: number;
    gyeongbuk_leaflet: number;
    gyeongnam_leaflet: number;
    junbuk_leaflet: number;
    junnam_leaflet: number;
    daejeon_leaflet: number;
    daegu_leaflet: number;
    gwangju_leaflet: number;
    busan_leaflet: number;
    ulsan_leaflet: number;
    jeju_leaflet: number;
    etc_city_leaflet: number;
    seoul_leaflet_survice: number;
    gyeonggi_leaflet_survice: number;
    incheon_leaflet_survice: number;
    gangwon_leaflet_survice: number;
    chungbuk_leaflet_survice: number;
    chungnam_leaflet_survice: number;
    gyeongbuk_leaflet_survice: number;
    gyeongnam_leaflet_survice: number;
    junbuk_leaflet_survice: number;
    junnam_leaflet_survice: number;
    daejeon_leaflet_survice: number;
    daegu_leaflet_survice: number;
    gwangju_leaflet_survice: number;
    busan_leaflet_survice: number;
    ulsan_leaflet_survice: number;
    jeju_leaflet_survice: number;
    etc_city_leaflet_survice: number;

    all_family_progress: number;
    all_family_application: number;
    all_family_end: number;
    all_family_level5: number;
    all_family_survice: number;
    all_visit_jobOffer: number;
    all_visit_job: number;
    all_visit_inside: number;
    all_etc_certificate: number;
    all_etc_levelApplication: number;
    all_absence: number;
    all_end: number;
    all_walfare: number;
    all_lee: number;
    all_kim: number;
    all_ayoung: number;
    all_seeun: number;
    all_gyugyeong: number;
    all_survice_lee: number;
    all_survice_kim: number;
    all_survice_ayoung: number;
    all_survice_seeun: number;
    all_survice_gyugyeong: number;
    all_survice_etc: number;
    avg_survice: number;
    avg_survice_week: number;
    date_survice: number;
    date_survice_week: number;
    avg_survice_all: number;
    avg_survice_5: number;
    avg_survice_10: number;
    avg_survice_15: number;
    avg_survice_20: number;
    avg_survice_25: number;
    avg_survice_30: number;
    avg_survice_35: number;
    avg_survice_40: number;
    avg_survice_40up: number;
    avg_survice_week_all: number;
    avg_survice_week_5: number;
    avg_survice_week_10: number;
    avg_survice_week_15: number;
    avg_survice_week_20: number;
    avg_survice_week_25: number;
    avg_survice_week_30: number;
    avg_survice_week_35: number;
    avg_survice_week_40: number;
    avg_survice_week_40up: number;

    today_call: number;
    today_newcall: number;
    today_recall: number;
    today_youtube: number;
    today_internet: number;
    today_naver: number;
    today_homepage: number;
    today_leafpaper: number;
    today_etc: number;
    today_unknowun: number;
    search_day: string;
    search_newcall: number;
    search_youtube: number;
    search_internet: number;
    search_naver: number;
    search_homepage: number;
    search_leafpaper: number;
    search_etc: number;
    search_unknowun: number;
    call_family_progress: number;
    call_family_application: number;
    call_family_end: number;
    call_family_level5: number;
    call_family_survice: number;
    call_visit_jobOffer: number;
    call_visit_job: number;
    call_visit_inside: number;
    call_etc_certificate: number;
    call_etc_levelApplication: number;
    call_absence: number;
    call_end: number;
    call_walfare: number;
    call_homepage: number;
    call_document: number;
    call_after: number;
    call_lee: number;
    call_lee_progress: number;
    call_lee_end: number;
    call_lee_absence: number;
    call_lee_etc: number;
    call_kim: number;
    call_kim_progress: number;
    call_kim_end: number;
    call_kim_absence: number;
    call_kim_etc: number;
    call_ayoung: number;
    call_ayoung_progress: number;
    call_ayoung_end: number;
    call_ayoung_absence: number;
    call_ayoung_etc: number;
    call_gyugyeong: number;
    call_gyugyeong_progress: number;
    call_gyugyeong_end: number;
    call_gyugyeong_absence: number;
    call_gyugyeong_etc: number;
    call_seeun: number;
    call_seeun_progress: number;
    call_seeun_end: number;
    call_seeun_absence: number;
    call_seeun_etc: number;
    call_etcPerson: number;

    conDate: string = '';
    conList: boolean = false;

    constructor(private api: ConsultService) {

    }
    ngOnInit() {
        this.load(0);
    }

    load($event: any) {
        if(this.searchOn==='기본'){
            this.api.consult.getConsultList($event, 7).subscribe(data => this.data = data);
            this.api.consult.getConsultList(0, 100000).subscribe(meta_data => this.meta_data = meta_data);
        } else if(this.searchOn==='상태'){
            this.api.consult.getStateConsult(this.state, $event, 7).subscribe( data => this.data = data );
        } else if(this.searchOn==='진행상황'){
            if(this.progress!=='진행요망'){
                this.api.consult.getProgressanytimeConsult(this.progress, $event, 7).subscribe( data => this.data = data );
            }else{
                this.api.consult.getProgressConsult(this.progress, $event, 7).subscribe( data => this.data = data );
            }
        }else if(this.searchOn==='검색'){
            if(this.searchType==='통합'){
                this.api.consult.getSearchConsult(this.search, $event, 7).subscribe( data => this.data = data );
            } else if(this.searchType==='시/도'){
                this.api.consult.getSearchCityConsult(this.search, $event, 7).subscribe( data => this.data = data );
            } else if(this.searchType==='시/군/구'){
                this.api.consult.getSearchHoleConsult(this.search, $event, 7).subscribe( data => this.data = data );
            } else if(this.searchType==='번호'){
                if(this.search.length>=1){
                    this.api.consult.getSearchPhoneConsult(this.search, $event, 7).subscribe( data => this.data = data );
                }
            } else if(this.searchType==='보호자'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchGiveConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='대상자'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchTakeConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='등급'){
                if(this.search.length>=1){
                    this.api.consult.getSearchLevelConsult(this.search, $event, 7).subscribe( data => this.data = data );
                }
            } else if(this.searchType==='현재상황'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchNowConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='상담내용'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchMemoConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='유입'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchComeConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='상담자'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchFirstConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='시작날'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchStartConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            } else if(this.searchType==='계약날'){
                if(this.search.length>=1) {
                    this.api.consult.getSearchEndConsult(this.search, $event, 7).subscribe(data => this.data = data);
                }
            }
        }
    }

    select_ward(){
        if(this.user.city==='강원'){
            this.ward=this.gangwon;
        } else if(this.user.city==='경기'){
            this.ward=this.gyeonggi;
        } else if(this.user.city==='경남'){
            this.ward=this.gyeongnam;
        } else if(this.user.city==='경북'){
            this.ward=this.gyeongbuk;
        } else if(this.user.city==='광주'){
            this.ward=this.gwangju;
        } else if(this.user.city==='대구'){
            this.ward=this.daegu;
        } else if(this.user.city==='대전'){
            this.ward=this.daejeon;
        } else if(this.user.city==='부산'){
            this.ward=this.busan;
        } else if(this.user.city==='서울'){
            this.ward=this.seoul;
        } else if(this.user.city==='세종'){
            this.ward=this.sejong;
        } else if(this.user.city==='울산'){
            this.ward=this.ulsan;
        } else if(this.user.city==='인천'){
            this.ward=this.incheon;
        } else if(this.user.city==='전남'){
            this.ward=this.junnam;
        } else if(this.user.city==='전북'){
            this.ward=this.junbuk;
        } else if(this.user.city==='제주'){
            this.ward=this.jeju;
        } else if(this.user.city==='충남'){
            this.ward=this.chungnam;
        } else if(this.user.city==='충북'){
            this.ward=this.chungbuk;
        }
    }

    delete(item: Consult) {
        if (!confirm("삭제 요청을 허가 하시겠습니까?")) {
            item.deleteReason = '';
            this.api.consult.saveConsult(item).subscribe(i => {
                item.id = i.id;
                item.createdAt = i.createdAt;
            });
            return;
        }
        this.api.consult.deleteConsult(item.id).subscribe(() => {
            this.data.content.remove(item);
        });
    }

    delete_request(item: Consult) {
        let now = new Date()
        item.deleteReason = now.toLocaleString() + '\n' + prompt('삭제 요청 이유를 적어주세요')
        this.api.consult.saveConsult(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

    getSearch(searchType: string, search: string){
        if(searchType==='통합'){
            this.api.consult.getSearchConsult(search, 0, 7).subscribe( data => this.data = data );
        } else if(searchType==='시/도'){
            this.api.consult.getSearchCityConsult(search, 0, 7).subscribe( data => this.data = data );
        } else if(searchType==='시/군/구'){
            this.api.consult.getSearchHoleConsult(search, 0, 7).subscribe( data => this.data = data );
        } else if(searchType==='번호'){
            if(search.length>=1){
                this.api.consult.getSearchPhoneConsult(search, 0, 7).subscribe( data => this.data = data );
            }
        } else if(searchType==='보호자'){
            if(search.length>=1) {
                this.api.consult.getSearchGiveConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='대상자'){
            if(search.length>=1) {
                this.api.consult.getSearchTakeConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='등급'){
            if(search.length>=1){
                this.api.consult.getSearchLevelConsult(search, 0, 7).subscribe( data => this.data = data );
            }
        } else if(searchType==='현재상황'){
            if(search.length>=1) {
                this.api.consult.getSearchNowConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='상담내용'){
            if(search.length>=1) {
                this.api.consult.getSearchMemoConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='유입'){
            if(search.length>=1) {
                this.api.consult.getSearchComeConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='상담자'){
            if(search.length>=1) {
                this.api.consult.getSearchFirstConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='시작날'){
            if(search.length>=1) {
                this.api.consult.getSearchStartConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        } else if(searchType==='계약날'){
            if(search.length>=1) {
                this.api.consult.getSearchEndConsult(search, 0, 7).subscribe(data => this.data = data);
            }
        }

        if(search.length>=1){
            this.searchOn='검색';
        } else{
            this.searchOn='기본';
            this.load(0);
        }
        this.check=false;
        this.saves=false;
        this.date_check=false;
        this.check_delete=false;
        this.state='';
        this.progress='';
        this.all_date=false;
        this.message_send=false;
        this.cs_check=false;
        this.three_date_check=false;
    }

    getState(state: string){
        this.api.consult.getStateConsult(state, 0, 7).subscribe( data => this.data = data );
        this.check=false;
        this.message_send=false;
        this.date_check=false;
        this.cs_check=false;
        this.check_delete=false;
        this.all_date=false;
        this.progress='';
        this.search='';
        this.searchOn='상태';
    }

    getStateList(state: string){
        this.api.consult.getStateListConsult(state).subscribe( list => this.list = list );
        this.check=false;
        this.message_send=false;
        this.date_check=false;
        this.cs_check=false;
        this.check_delete=false;
        this.all_date=false;
        this.progress='';
        this.search='';
        this.searchOn='상태';
    }

    getProgress(progress: string){
        if(progress!=='진행요망'){
            this.api.consult.getProgressanytimeConsult(progress, 0, 7).subscribe( data => this.data = data );
        }else{
            this.api.consult.getProgressConsult(progress, 0, 7).subscribe( data => this.data = data );
        }
        this.searchOn='진행상황';
        this.check=false;
        this.message_send=true;
        this.date_check=false;
        this.three_date_check=false;
        this.cs_check=false;
        this.check_delete=false;
        this.all_date=false;
        this.state='';
        this.search='';
        this.date='';
    }

    getDeleteReason(reason: string){
        this.api.consult.getDeleteReasonConsult(reason).subscribe( list => this.list = list );
        this.check_delete=true;
        this.date_check=false;
        this.three_date_check=false;
        this.cs_check=false;
        this.check=true;
        this.state='';
        this.progress='';
        this.search='';
        this.date='';
        this.all_date=false;
    }

    new() {
        this.user.state= '';
        this.user.progress= '';
        this.user.city= '';
        this.user.hole= '';
        this.user.phone= '';
        this.user.give= '';
        this.user.take= '';
        this.user.phone2= '';
        this.user.giveName= '';
        this.user.takeName= '';
        this.user.level= '';
        this.user.now= '';
        this.user.memo= '';
        this.user.come= '';
        this.user.first= '';
        this.user.start= '';
        this.user.end= '';
        this.user.deleteReason= '';
        this.user.id= null;
        this.user.createdAt= null;
        this.user.direct= false;
        this.user.csComplete= false;
        this.user.firstOrder= false;
        this.user.lastModifiedDate= '';
        this.date_check=false;
        this.three_date_check=false;
        this.message_send=false;
        this.check_delete=false;
        this.cs_check=false;
        this.all_date=false;
    }

    firstSave(item: Consult) {
        this.api.consult.getSamePhoneConsult(item.phone).subscribe(i => {
            this.phone_check = i;
            if(this.phone_check === true){
                alert('중복된 번호가 있습니다.');
                return;
            } else {
                this.api.consult.saveConsult(item).subscribe(i => {
                    item.id = i.id;
                    item.createdAt = i.createdAt;
                });
            }
            this.saves=false;
            return;
        });
    }

    save(item: Consult) {
        this.api.consult.saveConsult(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

    time_update(item: Consult){
        item.lastModifiedDate = new Date().toISOString();
    }

    download(table: HTMLTableElement) {
        TableToExcel.convert(table, {
            name: '상담요청.xlsx',
            sheet: {
                name: '상담요청'
            }
        });
    }

    meta(): boolean{
        this.calls = 0;
        this.recalls = 0;
        this.recalls_survice = 0;
        this.internet = 0;
        this.leaflet = 0;
        this.naver = 0;
        this.youtube = 0;
        this.gooddak = 0;
        this.homepage = 0;
        this.introduction = 0;
        this.erich = 0;
        this.corporation = 0;
        this.article = 0;
        this.blog = 0;
        this.daum = 0;
        this.katalk = 0;
        this.feed_paper = 0;
        this.etc = 0;
        this.internet_survice  = 0;
        this.leaflet_survice  = 0;
        this.naver_survice  = 0;
        this.youtube_survice = 0;
        this.gooddak_survice = 0;
        this.homepage_survice = 0;
        this.introduction_survice = 0;
        this.erich_survice = 0;
        this.corporation_survice = 0;
        this.article_survice = 0;
        this.blog_survice = 0;
        this.daum_survice = 0;
        this.katalk_survice = 0;
        this.feed_paper_survice = 0;
        this.etc_survice = 0;
        this.seoul_call = 0;
        this.gyeonggi_call = 0;
        this.incheon_call = 0;
        this.gangwon_call = 0;
        this.chungbuk_call = 0;
        this.chungnam_call = 0;
        this.gyeongbuk_call = 0;
        this.gyeongnam_call = 0;
        this.junbuk_call = 0;
        this.junnam_call = 0;
        this.daejeon_call = 0;
        this.daegu_call = 0;
        this.gwangju_call = 0;
        this.busan_call = 0;
        this.ulsan_call = 0;
        this.jeju_call = 0;
        this.etc_city_call = 0;
        this.seoul_leaflet = 0;
        this.gyeonggi_leaflet = 0;
        this.incheon_leaflet = 0;
        this.gangwon_leaflet = 0;
        this.chungbuk_leaflet = 0;
        this.chungnam_leaflet = 0;
        this.gyeongbuk_leaflet = 0;
        this.gyeongnam_leaflet = 0;
        this.junbuk_leaflet = 0;
        this.junnam_leaflet = 0;
        this.daejeon_leaflet = 0;
        this.daegu_leaflet = 0;
        this.gwangju_leaflet = 0;
        this.busan_leaflet = 0;
        this.ulsan_leaflet = 0;
        this.jeju_leaflet = 0;
        this.etc_city_leaflet = 0;
        this.seoul_leaflet_survice = 0;
        this.gyeonggi_leaflet_survice = 0;
        this.incheon_leaflet_survice = 0;
        this.gangwon_leaflet_survice = 0;
        this.chungbuk_leaflet_survice = 0;
        this.chungnam_leaflet_survice = 0;
        this.gyeongbuk_leaflet_survice = 0;
        this.gyeongnam_leaflet_survice = 0;
        this.junbuk_leaflet_survice = 0;
        this.junnam_leaflet_survice = 0;
        this.daejeon_leaflet_survice = 0;
        this.daegu_leaflet_survice = 0;
        this.gwangju_leaflet_survice = 0;
        this.busan_leaflet_survice = 0;
        this.ulsan_leaflet_survice = 0;
        this.jeju_leaflet_survice = 0;
        this.etc_city_leaflet_survice = 0;

        this.all_family_progress = 0;
        this.all_family_application = 0;
        this.all_family_end = 0;
        this.all_family_level5 = 0;
        this.all_family_survice = 0;
        this.all_visit_jobOffer = 0;
        this.all_visit_job = 0;
        this.all_visit_inside = 0;
        this.all_etc_certificate = 0;
        this.all_etc_levelApplication = 0;
        this.all_absence = 0;
        this.all_end = 0;
        this.all_walfare = 0;
        this.all_lee = 0;
        this.all_kim = 0;
        this.all_ayoung = 0;
        this.all_seeun = 0;
        this.all_gyugyeong = 0;
        this.all_seeun = 0;
        this.all_survice_lee = 0;
        this.all_survice_kim = 0;
        this.all_survice_ayoung = 0;
        this.all_survice_seeun = 0;
        this.all_survice_gyugyeong = 0;
        this.all_survice_seeun = 0;
        this.all_survice_etc = 0;
        this.avg_survice = 0;
        this.avg_survice_week = 0;
        this.date_survice = 0;
        this.date_survice_week = 0;
        this.avg_survice_all = 0;
        this.avg_survice_5 = 0;
        this.avg_survice_10 = 0;
        this.avg_survice_15 = 0;
        this.avg_survice_20 = 0;
        this.avg_survice_25 = 0;
        this.avg_survice_30 = 0;
        this.avg_survice_35 = 0;
        this.avg_survice_40 = 0;
        this.avg_survice_40up = 0;
        this.avg_survice_week_all = 0;
        this.avg_survice_week_5 = 0;
        this.avg_survice_week_10 = 0;
        this.avg_survice_week_15 = 0;
        this.avg_survice_week_20 = 0;
        this.avg_survice_week_25 = 0;
        this.avg_survice_week_30 = 0;
        this.avg_survice_week_35 = 0;
        this.avg_survice_week_40 = 0;
        this.avg_survice_week_40up = 0;

        this.today_call = 0;
        this.today_newcall = 0;
        this.today_recall = 0;
        this.today_youtube = 0;
        this.today_internet = 0;
        this.today_naver = 0;
        this.today_homepage = 0;
        this.today_leafpaper = 0;
        this.today_etc = 0;
        this.today_unknowun = 0;
        this.call_family_progress = 0;
        this.call_family_application = 0;
        this.call_family_end = 0;
        this.call_family_level5 = 0;
        this.call_family_survice = 0;
        this.call_visit_jobOffer = 0;
        this.call_visit_job = 0;
        this.call_visit_inside = 0;
        this.call_etc_certificate = 0;
        this.call_etc_levelApplication = 0;
        this.call_absence = 0;
        this.call_end = 0;
        this.call_walfare = 0;
        this.call_homepage = 0;
        this.call_document = 0;
        this.call_after = 0;
        this.call_lee = 0;
        this.call_lee_progress = 0;
        this.call_lee_end = 0;
        this.call_lee_absence = 0;
        this.call_lee_etc = 0;
        this.call_kim = 0;
        this.call_kim_progress = 0;
        this.call_kim_end = 0;
        this.call_kim_absence = 0;
        this.call_kim_etc = 0;
        this.call_ayoung = 0;
        this.call_ayoung_progress = 0;
        this.call_ayoung_end = 0;
        this.call_ayoung_absence = 0;
        this.call_ayoung_etc = 0;
        this.call_gyugyeong = 0;
        this.call_gyugyeong_progress = 0;
        this.call_gyugyeong_end = 0;
        this.call_gyugyeong_absence = 0;
        this.call_gyugyeong_etc = 0;
        this.call_seeun = 0;
        this.call_seeun_progress = 0;
        this.call_seeun_end = 0;
        this.call_seeun_absence = 0;
        this.call_seeun_etc = 0;
        this.call_etcPerson = 0;

        let create: Date;
        let date1: Date;
        let date2: Date;
        let now: Date;
        let gap: any;
        for (let i=0;i<this.meta_data.content.length;i++){
            if(this.meta_data.content[i] != null) {
                this.calls++;
                if (this.meta_data.content[i].come === '인터넷') {
                    this.internet++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.internet_survice++;
                    }
                } else if (this.meta_data.content[i].come === '전단지') {
                    this.leaflet++;
                    if (this.meta_data.content[i].city === '서울') {
                        this.seoul_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.seoul_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '경기도') {
                        this.gyeonggi_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.gyeonggi_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '인천') {
                        this.incheon_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.incheon_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '강원도') {
                        this.gangwon_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.gangwon_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '충북') {
                        this.chungbuk_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.chungbuk_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '충남') {
                        this.chungnam_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.chungnam_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '경북') {
                        this.gyeongbuk_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.gyeongbuk_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '경남') {
                        this.gyeongnam_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.gyeongnam_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '전북') {
                        this.junbuk_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.junbuk_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '전남') {
                        this.junnam_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.junnam_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '대전') {
                        this.daejeon_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.daejeon_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '대구') {
                        this.daegu_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.daegu_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '광주') {
                        this.gwangju_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.gwangju_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '부산') {
                        this.busan_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.busan_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '울산') {
                        this.ulsan_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.ulsan_leaflet_survice++;
                        }
                    } else if (this.meta_data.content[i].city === '제주도') {
                        this.jeju_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.jeju_leaflet_survice++;
                        }
                    } else {
                        this.etc_city_leaflet++;
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.etc_city_leaflet_survice++;
                        }
                    }
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.leaflet_survice++;
                    }
                } else if (this.meta_data.content[i].come === '네이버') {
                    this.naver++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.naver_survice++;
                    }
                } else if (this.meta_data.content[i].come === '유튜브') {
                    this.youtube++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.youtube_survice++;
                    }
                } else if (this.meta_data.content[i].come === '홈페이지') {
                    this.homepage++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.homepage_survice++;
                    }
                } else if (this.meta_data.content[i].come === '소개') {
                    this.introduction++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.introduction_survice++;
                    }
                } else if (this.meta_data.content[i].come === '블로그') {
                    this.blog++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.blog_survice++;
                    }
                } else if (this.meta_data.content[i].come === '다음') {
                    this.daum++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.daum_survice++;
                    }
                } else if (this.meta_data.content[i].come === '카톡') {
                    this.katalk++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.katalk_survice++;
                    }
                } else {
                    this.etc++;
                    if (this.meta_data.content[i].state === '가족_서비스시작') {
                        this.etc_survice++;
                    }
                }

                if (this.meta_data.content[i].city === '서울') {
                    this.seoul_call++;
                } else if (this.meta_data.content[i].city === '경기도') {
                    this.gyeonggi_call++;
                } else if (this.meta_data.content[i].city === '인천') {
                    this.incheon_call++;
                } else if (this.meta_data.content[i].city === '강원도') {
                    this.gangwon_call++;
                } else if (this.meta_data.content[i].city === '충북') {
                    this.chungbuk_call++;
                } else if (this.meta_data.content[i].city === '충남') {
                    this.chungnam_call++;
                } else if (this.meta_data.content[i].city === '경북') {
                    this.gyeongbuk_call++;
                } else if (this.meta_data.content[i].city === '경남') {
                    this.gyeongnam_call++;
                } else if (this.meta_data.content[i].city === '전북') {
                    this.junbuk_call++;
                } else if (this.meta_data.content[i].city === '전남') {
                    this.junnam_call++;
                } else if (this.meta_data.content[i].city === '대전') {
                    this.daejeon_call++;
                } else if (this.meta_data.content[i].city === '대구') {
                    this.daegu_call++;
                } else if (this.meta_data.content[i].city === '광주') {
                    this.gwangju_call++;
                } else if (this.meta_data.content[i].city === '부산') {
                    this.busan_call++;
                } else if (this.meta_data.content[i].city === '울산') {
                    this.ulsan_call++;
                } else if (this.meta_data.content[i].city === '제주도') {
                    this.jeju_call++;
                } else {
                    this.etc_city_call++;
                }

                if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                    this.all_family_progress++;
                } else if (this.meta_data.content[i].state === '가족_등급신청중') {
                    this.all_family_application++;
                } else if (this.meta_data.content[i].state === '가족_완료') {
                    this.all_family_end++;
                } else if (this.meta_data.content[i].state === '가족_5급') {
                    this.all_family_level5++;
                } else if (this.meta_data.content[i].state === '가족_서비스시작') {
                    this.all_family_survice++;
                    if (this.meta_data.content[i].first === '이건희') {
                        if (this.meta_data.content[i].memo.search('김세진') !== -1 || this.meta_data.content[i].memo.search('전아영') !== -1
                            || this.meta_data.content[i].memo.search('이세은') !== -1 || this.meta_data.content[i].memo.search('임규경') !== -1) {
                            this.all_survice_lee += 0.5;
                            if (this.meta_data.content[i].memo.search('김세진') !== -1) {
                                this.all_survice_kim += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('전아영') !== -1) {
                                this.all_survice_ayoung += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이세은') !== -1) {
                                this.all_survice_seeun += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('임규경') !== -1) {
                                this.all_survice_gyugyeong += 0.5;
                            }
                        } else {
                            this.all_survice_lee++;
                        }
                    } else if (this.meta_data.content[i].first === '김세진') {
                        if (this.meta_data.content[i].memo.search('이건희') !== -1 || this.meta_data.content[i].memo.search('전아영') !== -1
                            || this.meta_data.content[i].memo.search('임규경') !== -1 || this.meta_data.content[i].memo.search('이세은') !== -1) {
                            this.all_survice_kim += 0.5;
                            if (this.meta_data.content[i].memo.search('전아영') !== -1) {
                                this.all_survice_ayoung += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이건희') !== -1) {
                                this.all_survice_lee += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('임규경') !== -1) {
                                this.all_survice_gyugyeong += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이세은') !== -1) {
                                this.all_survice_seeun += 0.5;
                            }
                        } else {
                            this.all_survice_kim++;
                        }
                    } else if (this.meta_data.content[i].first === '전아영') {
                        if (this.meta_data.content[i].memo.search('이건희') !== -1 || this.meta_data.content[i].memo.search('김세진') !== -1
                            || this.meta_data.content[i].memo.search('임규경') !== -1 || this.meta_data.content[i].memo.search('이세은') !== -1) {
                            this.all_survice_ayoung += 0.5;
                            if (this.meta_data.content[i].memo.search('김세진') !== -1) {
                                this.all_survice_kim += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이건희') !== -1) {
                                this.all_survice_lee += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('임규경') !== -1) {
                                this.all_survice_gyugyeong += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이세은') !== -1) {
                                this.all_survice_seeun += 0.5;
                            }
                        } else {
                            this.all_survice_ayoung++;
                        }
                    } else if (this.meta_data.content[i].first === '임규경') {
                        if (this.meta_data.content[i].memo.search('이건희') !== -1 || this.meta_data.content[i].memo.search('김세진') !== -1
                            || this.meta_data.content[i].memo.search('전아영') !== -1 || this.meta_data.content[i].memo.search('이세은') !== -1) {
                            this.all_survice_gyugyeong += 0.5;
                            if (this.meta_data.content[i].memo.search('이건희') !== -1) {
                                this.all_survice_lee += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('김세진') !== -1) {
                                this.all_survice_kim += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('전아영') !== -1) {
                                this.all_survice_ayoung += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이세은') !== -1) {
                                this.all_survice_seeun += 0.5;
                            }
                        } else {
                            this.all_survice_gyugyeong++;
                        }
                    } else if (this.meta_data.content[i].first === '이세은') {
                        if (this.meta_data.content[i].memo.search('이건희') !== -1 || this.meta_data.content[i].memo.search('김세진') !== -1
                            || this.meta_data.content[i].memo.search('전아영') !== -1 || this.meta_data.content[i].memo.search('임규경') !== -1) {
                            this.all_survice_seeun += 0.5;
                            if (this.meta_data.content[i].memo.search('전아영') !== -1) {
                                this.all_survice_ayoung += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('이건희') !== -1) {
                                this.all_survice_lee += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('김세진') !== -1) {
                                this.all_survice_kim += 0.5;
                            }
                            if (this.meta_data.content[i].memo.search('임규경') !== -1) {
                                this.all_survice_gyugyeong += 0.5;
                            }
                        } else {
                            this.all_survice_seeun++;
                        }
                    } else {
                        this.all_survice_etc++;
                    }


                    if (this.meta_data.content[i].end != null && this.meta_data.content[i].end != '') {
                        if (this.meta_data.content[i].end.substring(0, 2) === '12' || this.meta_data.content[i].end.substring(0, 2) === '11' || this.meta_data.content[i].end.substring(0, 2) === '10') {
                            date1 = new Date('2020-' + this.meta_data.content[i].end.substring(0, 2) + '-' + this.meta_data.content[i].end.substring(3, 5));
                        } else {
                            date1 = new Date('2021-' + this.meta_data.content[i].end.substring(0, 1) + '-' + this.meta_data.content[i].end.substring(2, 4));
                        }
                        date2 = new Date(this.meta_data.content[i].createdAt);
                        now = new Date;
                        gap = date1.getTime() - date2.getTime();
                        this.avg_survice += Math.floor(gap / (1000 * 60 * 60 * 24));
                        this.date_survice++;
                        this.avg_survice_all++;
                        if (Math.floor((now.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)) < 8) {
                            this.avg_survice_week += Math.floor(gap / (1000 * 60 * 60 * 24));
                            this.date_survice_week++
                            this.avg_survice_week_all++;
                        }
                        if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 5) {
                            this.avg_survice_5++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 10) {
                            this.avg_survice_10++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 15) {
                            this.avg_survice_15++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 20) {
                            this.avg_survice_20++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 25) {
                            this.avg_survice_25++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 30) {
                            this.avg_survice_30++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 35) {
                            this.avg_survice_35++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 40) {
                            this.avg_survice_40++;
                        } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) > 40) {
                            this.avg_survice_40up++;
                        }
                        if (Math.floor((now.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)) < 8) {
                            if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 5) {
                                this.avg_survice_week_5++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 10) {
                                this.avg_survice_week_10++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 15) {
                                this.avg_survice_week_15++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 20) {
                                this.avg_survice_week_20++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 25) {
                                this.avg_survice_week_25++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 30) {
                                this.avg_survice_week_30++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 35) {
                                this.avg_survice_week_35++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) <= 40) {
                                this.avg_survice_week_40++;
                            } else if (Math.floor(gap / (1000 * 60 * 60 * 24)) > 40) {
                                this.avg_survice_week_40up++;
                            }
                        }
                    }
                } else if (this.meta_data.content[i].state === '일반_구인요청') {
                    this.all_visit_jobOffer++;
                } else if (this.meta_data.content[i].state === '일반_구직문의') {
                    this.all_visit_job++;
                } else if (this.meta_data.content[i].state === '일반_소개') {
                    this.all_visit_inside++;
                } else if (this.meta_data.content[i].state === '기타_자격증 / 교육원 문의') {
                    this.all_etc_certificate++;
                } else if (this.meta_data.content[i].state === '기타_등급신청 문의') {
                    this.all_etc_levelApplication++;
                } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                    this.all_absence++;
                } else if (this.meta_data.content[i].state === '종료/보류') {
                    this.all_end++;
                } else if (this.meta_data.content[i].state === '기타/복지용구') {
                    this.all_walfare++;
                }

                if (this.meta_data.content[i].first != null && this.meta_data.content[i].first != '') {
                    if (this.meta_data.content[i].first === '이건희') {
                        this.all_lee++;
                    } else if (this.meta_data.content[i].first === '김세진') {
                        this.all_kim++;
                    } else if (this.meta_data.content[i].first === '전아영') {
                        this.all_ayoung++;
                    } else if (this.meta_data.content[i].first === '임규경') {
                        this.all_gyugyeong++;
                    } else if (this.meta_data.content[i].first === '이세은') {
                        this.all_seeun++;
                    }
                }

                if (this.meta_data.content[i].memo != null && this.meta_data.content[i].memo != '') {
                    if (this.meta_data.content[i].memo.search('이건희') !== -1) {
                        this.all_lee += (this.meta_data.content[i].memo.match(/이건희/g) || []).length;
                    }
                    if (this.meta_data.content[i].memo.search('김세진') !== -1) {
                        this.all_kim += (this.meta_data.content[i].memo.match(/김세진/g) || []).length;
                    }
                    if (this.meta_data.content[i].memo.search('전아영') !== -1) {
                        this.all_ayoung += (this.meta_data.content[i].memo.match(/전아영/g) || []).length;
                    }
                    if (this.meta_data.content[i].memo.search('임규경') !== -1) {
                        this.all_gyugyeong += (this.meta_data.content[i].memo.match(/임규경/g) || []).length;
                    }
                    if (this.meta_data.content[i].memo.search('이세은') !== -1) {
                        this.all_seeun += (this.meta_data.content[i].memo.match(/이세은/g) || []).length;
                    }
                    if (this.meta_data.content[i].memo.search('이건희') !== -1 || this.meta_data.content[i].memo.search('김세진') !== -1 || this.meta_data.content[i].memo.search('전아영') !== -1 || this.meta_data.content[i].memo.search('이세은') !== -1) {
                        this.recalls++
                        if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.recalls_survice++;
                        }
                    }
                }

                if (this.meta_data.content[i].lastModifiedDate != null && this.meta_data.content[i].lastModifiedDate != '' && this.meta_data.content[i].lastModifiedDate.substring(0, 10) === this.today) {
                    create = new Date(this.meta_data.content[i].createdAt);

                    if (create.toISOString().substring(0, 10) === this.today) {
                        this.today_call++;
                        this.today_newcall++;
                        if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                            this.call_family_progress++;
                        } else if (this.meta_data.content[i].state === '가족_등급신청중') {
                            this.call_family_application++;
                        } else if (this.meta_data.content[i].state === '가족_완료') {
                            this.call_family_end++;
                        } else if (this.meta_data.content[i].state === '가족_5급') {
                            this.call_family_level5++;
                        } else if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.call_family_survice++;
                        } else if (this.meta_data.content[i].state === '일반_구인요청') {
                            this.call_visit_jobOffer++;
                        } else if (this.meta_data.content[i].state === '일반_구직문의') {
                            this.call_visit_job++;
                        } else if (this.meta_data.content[i].state === '일반_소개') {
                            this.call_visit_inside++;
                        } else if (this.meta_data.content[i].state === '기타_자격증 / 교육원 문의') {
                            this.call_etc_certificate++;
                        } else if (this.meta_data.content[i].state === '기타_등급신청 문의') {
                            this.call_etc_levelApplication++;
                        } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                            this.call_absence++;
                        } else if (this.meta_data.content[i].state === '종료/보류') {
                            this.call_end++;
                        } else if (this.meta_data.content[i].state === '기타/복지용구') {
                            this.call_walfare++;
                        } else if (this.meta_data.content[i].state === '홈페이지 예약') {
                            this.call_homepage++;
                            this.today_call--;
                        }

                        if (this.meta_data.content[i].now != null && this.meta_data.content[i].now != '') {
                            if (this.meta_data.content[i].now.includes('대기')) {
                                this.call_document++
                            } else if (this.meta_data.content[i].now.includes('추후')) {
                                this.call_after++
                            }
                        }

                        if (this.meta_data.content[i].come != null && this.meta_data.content[i].come != '') {
                            if (this.meta_data.content[i].come.includes('브')) {
                                this.today_youtube++
                            } else if (this.meta_data.content[i].come.includes('넷')) {
                                this.today_internet++
                            } else if (this.meta_data.content[i].come.includes('네')) {
                                this.today_naver++
                            } else if (this.meta_data.content[i].come.includes('전')) {
                                this.today_leafpaper++
                            } else if (this.meta_data.content[i].come.includes('홈')) {
                                this.today_homepage++
                            } else {
                                this.today_etc++
                            }
                        } else {
                            this.today_unknowun++
                        }
                    }

                    if (this.meta_data.content[i].memo != null && this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10)))) {
                        this.today_call++;
                        this.today_recall++;
                        if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                            this.call_family_progress++;
                        } else if (this.meta_data.content[i].state === '가족_등급신청중') {
                            this.call_family_application++;
                        } else if (this.meta_data.content[i].state === '가족_완료') {
                            this.call_family_end++;
                        } else if (this.meta_data.content[i].state === '가족_5급') {
                            this.call_family_level5++;
                        } else if (this.meta_data.content[i].state === '가족_서비스시작') {
                            this.call_family_survice++;
                        } else if (this.meta_data.content[i].state === '일반_구인요청') {
                            this.call_visit_jobOffer++;
                        } else if (this.meta_data.content[i].state === '일반_구직문의') {
                            this.call_visit_job++;
                        } else if (this.meta_data.content[i].state === '일반_소개') {
                            this.call_visit_inside++;
                        } else if (this.meta_data.content[i].state === '기타_자격증 / 교육원 문의') {
                            this.call_etc_certificate++;
                        } else if (this.meta_data.content[i].state === '기타_등급신청 문의') {
                            this.call_etc_levelApplication++;
                        } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                            this.call_absence++;
                        } else if (this.meta_data.content[i].state === '종료/보류') {
                            this.call_end++;
                        } else if (this.meta_data.content[i].state === '기타/복지용구') {
                            this.call_walfare++;
                        } else if (this.meta_data.content[i].state === '홈페이지 예약') {
                            this.call_homepage++;
                            this.today_call--;
                        }

                        if (this.meta_data.content[i].now != null && this.meta_data.content[i].now != '') {
                            if (this.meta_data.content[i].now.includes('대기')) {
                                this.call_document++
                            } else if (this.meta_data.content[i].now.includes('추후')) {
                                this.call_after++
                            }
                        }

                        if (this.meta_data.content[i].come != null && this.meta_data.content[i].come != '') {
                            if (this.meta_data.content[i].come.includes('브')) {
                                this.today_youtube++
                            } else if (this.meta_data.content[i].come.includes('넷')) {
                                this.today_internet++
                            } else if (this.meta_data.content[i].come.includes('네')) {
                                this.today_naver++
                            } else if (this.meta_data.content[i].come.includes('전')) {
                                this.today_leafpaper++
                            } else if (this.meta_data.content[i].come.includes('홈')) {
                                this.today_homepage++
                            } else {
                                this.today_etc++
                            }
                        } else {
                            this.today_unknowun++
                        }
                    }

                    if (this.meta_data.content[i].first != null && this.meta_data.content[i].first != '' && create.toISOString().substring(0, 10) === this.meta_data.content[i].lastModifiedDate.substring(0, 10)) {
                        if (this.meta_data.content[i].first === '이건희') {
                            this.call_lee++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_lee_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_lee_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_lee_absence++;
                            } else {
                                this.call_lee_etc++;
                            }
                        } else if (this.meta_data.content[i].first === '김세진') {
                            this.call_kim++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_kim_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_kim_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_kim_absence++;
                            } else{
                                this.call_kim_etc++;
                            }
                        } else if (this.meta_data.content[i].first === '전아영') {
                            this.call_ayoung++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_ayoung_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_ayoung_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_ayoung_absence++;
                            } else{
                                this.call_ayoung_etc++;
                            }
                        } else if (this.meta_data.content[i].first === '임규경') {
                            this.call_gyugyeong++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_gyugyeong_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_gyugyeong_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_gyugyeong_absence++;
                            } else {
                                this.call_gyugyeong_etc++;
                            }
                        } else if (this.meta_data.content[i].first === '이세은') {
                            this.call_seeun++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_seeun_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_seeun_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_seeun_absence++;
                            } else {
                                this.call_seeun_etc++;
                            }
                        } else {
                            this.call_etcPerson++;
                        }
                    }

                    if (this.meta_data.content[i].memo != null && this.meta_data.content[i].memo != '') {
                        if (this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10) + '/ 이건희'))) {
                            this.call_lee++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_lee_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_lee_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_lee_absence++;
                            } else {
                                this.call_lee_etc++;
                            }
                        }
                        if (this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10) + '/ 김세진'))) {
                            this.call_kim++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_kim_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_kim_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_kim_absence++;
                            } else {
                                this.call_kim_etc++;
                            }
                        }
                        if (this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10) + '/ 전아영'))) {
                            this.call_ayoung++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_ayoung_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_ayoung_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_ayoung_absence++;
                            } else {
                                this.call_ayoung_etc++;
                            }
                        }
                        if (this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10) + '/ 임규경'))) {
                            this.call_gyugyeong++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_gyugyeong_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_gyugyeong_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_gyugyeong_absence++;
                            } else {
                                this.call_gyugyeong_etc++;
                            }
                        }
                        if (this.meta_data.content[i].memo.includes(String(this.today.substring(5, 10) + '/ 이세은'))) {
                            this.call_seeun++;
                            if (this.meta_data.content[i].state === '가족_진행중(1~4급)') {
                                this.call_seeun_progress++;
                            } else if (this.meta_data.content[i].state === '가족_완료') {
                                this.call_seeun_end++;
                            } else if (this.meta_data.content[i].state === '부재 & 통화요망') {
                                this.call_seeun_absence++;
                            } else {
                                this.call_seeun_etc++;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    PhoneNumberFormat = (value: string) => {
        if(value===null || value===''){
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

    checkAdmin() {
        if(prompt('암호?') === 'rhkgkr139'){
            this.admin=true;
        }
        return;
    }

    search_data(){
        this.search_newcall = 0;
        this.search_youtube = 0;
        this.search_internet = 0;
        this.search_naver = 0;
        this.search_homepage = 0;
        this.search_leafpaper = 0;
        this.search_etc = 0;
        this.search_unknowun = 0;

        for (let i=0;i<this.meta_data.content.length;i++){
            let date = new Date(this.search_day);
            let date2 = new Date(this.meta_data.content[i].createdAt)
            let calDate = date.getTime() - date2.getTime();
            let calDateDays = calDate / ( 24*60*60*1000);

            if(Math.abs(calDateDays) < 0.5){
                if(this.meta_data.content[i].come!=null && this.meta_data.content[i].come!=''){
                    if (this.meta_data.content[i].come.includes('브')){
                        this.search_youtube++
                    } else if(this.meta_data.content[i].come.includes('넷')){
                        this.search_internet++
                    } else if(this.meta_data.content[i].come.includes('네')){
                        this.search_naver++
                    } else if(this.meta_data.content[i].come.includes('전')){
                        this.search_leafpaper++
                    } else if(this.meta_data.content[i].come.includes('홈')){
                        this.search_homepage++
                    } else {
                        this.search_etc++
                    }
                } else {
                    this.search_unknowun++
                }
                this.search_newcall++
            }
        }
    }

    calDateBetweenAandB(item: Consult)
    {
        let date = new Date();
        let date2 = new Date(item.createdAt)
        let date3 = new Date(item.lastModifiedDate)
        let calDate = date.getTime() - date2.getTime();
        let calDateDays = calDate / ( 24*60*60*1000);
        let calDate2 = date3.getTime() - date2.getTime();
        let calDate2Days = calDate2 / ( 24*60*60*1000);

        return Math.abs(calDateDays) > 1.5 && Math.abs(calDate2Days) < 1;
    }

    nowDateBetweenAandB(item: Consult)
    {
        let date = new Date();
        let date3 = new Date(item.lastModifiedDate)
        let calDate = date.getTime() - date3.getTime();
        let calDateDays = calDate / ( 24*60*60*1000);

        return Math.abs(calDateDays) < 5.5 && Math.abs(calDateDays) > 2.5;
    }

    phoneCheck(phone: string): string{
        if(phone===null || phone===''){
            return '';
        }
        const phoneReplace = /-/g;

        return phone.toString().replace(phoneReplace, '');

    }
}
