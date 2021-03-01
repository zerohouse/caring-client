import {Component, HostListener, OnInit} from '@angular/core';
import {animate} from "@angular/animations";

@Component({
    selector: 'cr-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.sass']
})
export class ChatbotComponent implements OnInit {

    ngOnInit() {
    }

    click: boolean = false;
    type: string = '자주 묻는 질문';
    scroll: boolean = false;

    // check_on(){
    //     // @ts-ignore
    //     $("body").addClass("notscroll")
    // }
    // check_off(){
    //     // @ts-ignore
    //     $("body").removeClass("notscroll")
    // }


    choice(){
        // if(this.type==='가족요양, 일반요양 문의' ||this.type==='요양보호사 구직문의' || this.type==='요양보호사 자격증 문의'
        //     || this.type==='복지용구 문의' || this.type==='기타 문의'){
        //     this.type='main';
        //     return;
        // } else if(this.type==='가족요양' || this.type==='일반요양'){
        //     this.type='가족요양, 일반요양 문의';
        //     return
        // } else if(this.type==='가족 자격증있다.'){
        //     this.type='가족요양';
        //     return
        // } else if(this.type==='가족 등급있다.' || this.type==='가족 등급없다.'){
        //     this.type='가족 자격증있다.';
        //     return
        // } else if(this.type==='가족 1~4등급' || this.type==='가족 5등급'){
        //     this.type='가족 등급있다.';
        //     return
        // } else if(this.type==='수도권' || this.type==='지방'){
        //     this.type='일반 1~4등급';
        //     return
        // } else if(this.type==='일반 1~4등급' || this.type==='일반 5등급'){
        //     this.type='일반 등급있다.';
        //     return
        // } else if(this.type==='구직 자격증있다.'){
        //     this.type='요양보호사 구직문의';
        //     return
        // } else if(this.type==='일반 등급있다.' || this.type==='일반 등급없다.'){
        //     this.type='일반요양';
        //     return} else
        if(this.type==='가족요양 제도란?' || this.type==='케어링 가족요양 급여는?' || this.type==='센터마다 급여가 다른 이유?'
            || this.type==='본인부담금이란?' || this.type==='지방인데 이용 가능한가요?'){
            this.type='자주 묻는 질문';
            return
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll($event){
        this.scroll = document.documentElement.scrollTop > 50;
    }
}
