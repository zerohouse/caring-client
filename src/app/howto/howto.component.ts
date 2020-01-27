import {Component, HostListener, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'cr-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.sass']
})
export class HowtoComponent implements OnInit {

  index = 0;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:resize')
  setHeight(index?: number) {
    if (!index) {
      index = this.index;
    }
    const swiperContainer = $('cr-howto .swiper-container');
    swiperContainer.height('auto');
    swiperContainer.height($('.slide-desc')[index].offsetHeight);
  }


  setIndex(index: number) {
    // $('.drag-scroll-content').scrollTo($('.swiperindex')[index], 300);
    this.setHeight(index);
  }


}

