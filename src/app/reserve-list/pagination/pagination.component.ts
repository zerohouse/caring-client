import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pageable} from '../../../../ngxSpring/api.model';

@Component({
  selector: 'at-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {

  start = 0;

  @Input()
  paginationLimit = 5;

  @Input()
  pageable: Pageable;


  @Input()
  size;


  @Output()
  pageChange = new EventEmitter();


  get pages() {
    const pages = [];
    if (!this.pageable) {
      return [];
    }
    for (let i = 0; i < this.size; i++) {
      pages.push(i + 1);
    }
    return pages;
  }


  startPlus() {
    if (!this.startPlusAble) {
      return;
    }
    this.start += 5;
  }


  startZero() {
    this.start = 0;
  }

  startEnd() {
    this.start = Math.max(0, this.pages.length - this.paginationLimit);
  }


  startMinus() {
    if (!this.startMinusAble) {
      return;
    }
    this.start -= 5;
  }

  get startMinusAble() {
    return this.start !== 0;
  }

  get startPlusAble() {
    return this.start + this.paginationLimit < this.pages.length;
  }

  change(i) {
    this.pageChange.emit(i);
  }

}
