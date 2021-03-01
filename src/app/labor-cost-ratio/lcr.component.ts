import {Component, HostListener, OnInit} from '@angular/core';
import {CountUpOptions} from "countup.js";

@Component({
    selector: 'cr-lcr',
    templateUrl: './lcr.component.html',
    styleUrls: ['./lcr.component.sass']
})
export class LcrComponent implements OnInit {
    myOpts: CountUpOptions = {
        startVal: 0,
        decimalPlaces: 2,
        duration: 3,
        useEasing: true,
        useGrouping: true,
        smartEasingThreshold: 999,
        smartEasingAmount: 333,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    }
    scroll: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event){
        if (window.innerWidth>=1440){
            for (let i=0; i<10; i++){
                if(window.innerHeight>=1000-i*100){
                    if (document.documentElement.scrollTop > 800+i*100){
                        this.scroll = true;
                        return;
                    }
                }
            }
        } else if (window.innerWidth===1024){
            if (document.documentElement.scrollTop > 300){
                this.scroll = true;
                return;
            }
        } else if (window.innerWidth>=900){
            for (let i=0; i<10; i++){
                if(window.innerHeight>=1000-i*100){
                    if (document.documentElement.scrollTop > 600+i*100){
                        this.scroll = true;
                        return;
                    }
                }
            }
        } else if (window.innerWidth>=600){
            for (let i=0; i<10; i++){
                if(window.innerHeight>=1000-i*100){
                    if(document.documentElement.scrollTop > 1500+i*100){
                        this.scroll = true;
                        return;
                    }
                }
            }
        } else if (window.innerWidth>=540){
            if (document.documentElement.scrollTop > 1600){
                this.scroll = true;
                return;
            }
        } else if (window.innerWidth>=300){
            for (let i=0; i<10; i++){
                if(window.innerHeight>=1000-i*100){
                    if (document.documentElement.scrollTop > 950+i*98){
                        this.scroll = true;
                        return;
                    }
                }
            }
        } else if (window.innerWidth>=0){
            for (let i=0; i<10; i++){
                if(window.innerHeight>=1000-i*100){
                    if (document.documentElement.scrollTop > 850+i*98){
                        this.scroll = true;
                        return;
                    }
                }
            }
        }
    }
}
