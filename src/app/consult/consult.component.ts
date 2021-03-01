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
    progress: string;
    search: string;
    memo: string;
    date: string;
    searchType: string = '통합';
    searchOn: string = '기본';
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
    all_check: boolean = true;
    message_all_check: boolean = true;
    all_date: boolean = false;
    phone_check: boolean = false;

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
    seoul: number;
    gyeonggi: number;
    incheon: number;
    gangwon: number;
    chungbuk: number;
    chungnam: number;
    gyeongbuk: number;
    gyeongnam: number;
    junbuk: number;
    junnam: number;
    daejeon: number;
    daegu: number;
    gwangju: number;
    busan: number;
    ulsan: number;
    jeju: number;
    etc_city: number;
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

    con1: number;
    con2: number;
    con3: number;
    con4: number;
    con5: number;
    con6: number;
    con7: number;
    con8: number;
    con9: number;
    con10: number;
    con11: number;
    con12: number;
    con13: number;
    con14: number;
    con15: number;
    con16: number;
    con17: number;
    con18: number;
    con19: number;
    con20: number;
    con21: number;
    con22: number;
    con23: number;
    con24: number;
    con25: number;
    con26: number;
    con27: number;
    con28: number;
    con29: number;
    con30: number;
    con31: number;
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
            } else if(this.searchType==='도.시/군'){
                this.api.consult.getSearchCityConsult(this.search, $event, 7).subscribe( data => this.data = data );
            } else if(this.searchType==='구'){
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
        } else if(searchType==='도.시/군'){
            this.api.consult.getSearchCityConsult(search, 0, 7).subscribe( data => this.data = data );
        } else if(searchType==='구'){
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
        this.seoul = 0;
        this.gyeonggi = 0;
        this.incheon = 0;
        this.gangwon = 0;
        this.chungbuk = 0;
        this.chungnam = 0;
        this.gyeongbuk = 0;
        this.gyeongnam = 0;
        this.junbuk = 0;
        this.junnam = 0;
        this.daejeon = 0;
        this.daegu = 0;
        this.gwangju = 0;
        this.busan = 0;
        this.ulsan = 0;
        this.jeju = 0;
        this.etc_city = 0;
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
                    this.seoul++;
                } else if (this.meta_data.content[i].city === '경기도') {
                    this.gyeonggi++;
                } else if (this.meta_data.content[i].city === '인천') {
                    this.incheon++;
                } else if (this.meta_data.content[i].city === '강원도') {
                    this.gangwon++;
                } else if (this.meta_data.content[i].city === '충북') {
                    this.chungbuk++;
                } else if (this.meta_data.content[i].city === '충남') {
                    this.chungnam++;
                } else if (this.meta_data.content[i].city === '경북') {
                    this.gyeongbuk++;
                } else if (this.meta_data.content[i].city === '경남') {
                    this.gyeongnam++;
                } else if (this.meta_data.content[i].city === '전북') {
                    this.junbuk++;
                } else if (this.meta_data.content[i].city === '전남') {
                    this.junnam++;
                } else if (this.meta_data.content[i].city === '대전') {
                    this.daejeon++;
                } else if (this.meta_data.content[i].city === '대구') {
                    this.daegu++;
                } else if (this.meta_data.content[i].city === '광주') {
                    this.gwangju++;
                } else if (this.meta_data.content[i].city === '부산') {
                    this.busan++;
                } else if (this.meta_data.content[i].city === '울산') {
                    this.ulsan++;
                } else if (this.meta_data.content[i].city === '제주도') {
                    this.jeju++;
                } else {
                    this.etc_city++;
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

    contrac(): boolean{
        this.con1 = 0;
        this.con2 = 0;
        this.con3 = 0;
        this.con4 = 0;
        this.con5 = 0;
        this.con6 = 0;
        this.con7 = 0;
        this.con8 = 0;
        this.con9 = 0;
        this.con10 = 0;
        this.con11 = 0;
        this.con12 = 0;
        this.con13 = 0;
        this.con14 = 0;
        this.con15 = 0;
        this.con16 = 0;
        this.con17 = 0;
        this.con18 = 0;
        this.con19 = 0;
        this.con20 = 0;
        this.con21 = 0;
        this.con22 = 0;
        this.con23 = 0;
        this.con24 = 0;
        this.con25 = 0;
        this.con26 = 0;
        this.con27 = 0;
        this.con28 = 0;
        this.con29 = 0;
        this.con30 = 0;
        this.con31 = 0;

        for (let i=0;i<this.list.length;i++){
            if(this.list[i].end==='2/1'){
                this.con1++;
            } else if(this.list[i].end==='2/2'){
                this.con2++;
            } else if(this.list[i].end==='2/2'){
                this.con2++;
            } else if(this.list[i].end==='2/3'){
                this.con3++;
            } else if(this.list[i].end==='2/4'){
                this.con4++;
            } else if(this.list[i].end==='2/5'){
                this.con5++;
            } else if(this.list[i].end==='2/6'){
                this.con6++;
            } else if(this.list[i].end==='2/7'){
                this.con7++;
            } else if(this.list[i].end==='2/8'){
                this.con8++;
            } else if(this.list[i].end==='2/9'){
                this.con9++;
            } else if(this.list[i].end==='2/10'){
                this.con10++;
            } else if(this.list[i].end==='2/11'){
                this.con11++;
            } else if(this.list[i].end==='2/12'){
                this.con12++;
            } else if(this.list[i].end==='2/13'){
                this.con13++;
            } else if(this.list[i].end==='2/14'){
                this.con14++;
            } else if(this.list[i].end==='2/15'){
                this.con15++;
            } else if(this.list[i].end==='2/16'){
                this.con16++;
            } else if(this.list[i].end==='2/17'){
                this.con17++;
            } else if(this.list[i].end==='2/18'){
                this.con18++;
            } else if(this.list[i].end==='2/19'){
                this.con19++;
            } else if(this.list[i].end==='2/20'){
                this.con20++;
            } else if(this.list[i].end==='2/21'){
                this.con21++;
            } else if(this.list[i].end==='2/22'){
                this.con22++;
            } else if(this.list[i].end==='2/23'){
                this.con23++;
            } else if(this.list[i].end==='2/24'){
                this.con24++;
            } else if(this.list[i].end==='2/25'){
                this.con25++;
            } else if(this.list[i].end==='2/26'){
                this.con26++;
            } else if(this.list[i].end==='2/27'){
                this.con27++;
            } else if(this.list[i].end==='2/28'){
                this.con28++;
            }
        }
        return true;
    }
}
